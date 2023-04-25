import React, { Component } from 'react'

import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import { Navigate } from "react-router-dom";

class Login extends Component {
  
    handleLogin = (data) => {
      this.props.dispatch({ type: 'LOGIN', first_name: data.first_name, last_name: data.last_name, user_id: data.id});
    }

    handleLogout = () => {
      this.props.dispatch({ type: 'LOGOUT' });
    }
    constructor(props) {
        super(props);
        this.state = {

          password: '',
   
          userName: ''

        };
      }

    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }
    
    handleClick = () => {
        this.setState({ isLoading: true, loaded: false, invalidAttempt: false });
        const bodyData = JSON.stringify({
            username: this.state.userName,
            password: this.state.password,
        })
        console.log(bodyData);
        fetch('https://test1-4dk76hxqra-el.a.run.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData
            })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.result != false){
            this.handleLogin(data);
            this.setState({ isLoading: false, loaded: true, response: data, invalidAttempt:false });
          }
          else{
            this.setState({ isLoading: false, loaded: true, response: data, invalidAttempt:true });
          }
      })
        
      };
  render () {
    
    const { isLoggedIn, userData } = this.props;
    const {password, userName } = this.state;
    return (
      
        <div className="background-body">
          {(!this.state.invalidAttempt) && this.state.loaded && (<Navigate to={'/'} />)}
        <div className = "filter-layer">
            <div className='gradient'>
        <div className="container">
    
            <div className="uname"> User Name:&nbsp; <input type='text' name='userName' value={userName} onChange={this.handleInputChange}></input></div>
            <div className="password">Password:&nbsp;&nbsp;&nbsp;&nbsp; <input type='password' name='password' value={password} onChange={this.handleInputChange}></input></div>
            <div className = "SubmitButton"> <button onClick = {this.handleClick}  className='button-lit'>Login</button>  </div> 
            {this.state.invalidAttempt ? <div className="invalid-attempt">Invalid Username or Password</div> : <div>Enter Your Username and Password</div>}
            
            <Link to="/signup"><div className="clicksign">Click here to SignUp</div></Link>
        </div></div></div></div>
      )
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    userData: state.userData
  };
};

export default connect(mapStateToProps)(Login);