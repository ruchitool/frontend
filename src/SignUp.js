import React, { Component } from 'react';
import './SignUp.css';
import { Link } from "react-router-dom";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          age: '',
          userName: ''

        };
      }

    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }
    
    handleClick = () => {
        this.setState({ isLoading: true, loaded: false });
        const bodyData = JSON.stringify({
            username: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            age: this.state.age
        })
        console.log(bodyData);
        fetch('https://test1-4dk76hxqra-el.a.run.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyData
            })
        .then(response => response.json())
        
      };
    render() {
        const { email, password, userName,firstName,lastName,age } = this.state;
        return (
            <div className="background-body">
                <div className = "filter-layer">
                    <div className='gradient'>
                        <div className="container">
                            <div className="a">
                            <div className="fname"> First Name:&nbsp; <input type='text' name='firstName' value={firstName} onChange={this.handleInputChange}></input></div>
                            <div className="lname"> Last Name:&nbsp; <input type='text' name='lastName' value={lastName} onChange={this.handleInputChange}></input></div>
                            </div>
                            <div className = "b">
                            <div className="uname"> User Name:&nbsp; <input type='text' name='userName' value={userName} onChange={this.handleInputChange}></input></div>
                            <div className="email"> Email Id:&nbsp;&nbsp;&nbsp;&nbsp; <input type='email' name='email' value={email} onChange={this.handleInputChange}></input></div>
                            </div>
                            <div className = "c">
                            <div className="password">Password:&nbsp;&nbsp;&nbsp;&nbsp; <input type='password' name='password' value={password} onChange={this.handleInputChange}></input></div>
                            <div className="age"> Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='number' name='age' value={age} onChange={this.handleInputChange}></input></div>
                            </div>
                            <div className = "d">
                            <Link to="/login">   <div className = "SubmitButton"> <button onClick = {this.handleClick}  className='button-lit'>Submit</button>    Click Here To Login</div></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;