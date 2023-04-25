import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import ProfileCard from "./components/Profile/ProfileCard";
import HomeContent from "./components/HomeContent/HomeContent";
import { connect } from 'react-redux';
import ClassesPage from './components/ClassesPage/ClassesPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showClasses: false
    }
    this.swapContent = this.swapContent.bind(this);
  }

  swapContent(event) {
    if (this.state.showClasses === false)
      this.setState({showClasses: true});
    else
      this.setState({showClasses: false});
  }

  render() {
    const { first_name,last_name,user_id, isLoggedIn } = this.props;
    return (
      
      <div className="background-body">
        <div className = "filter-layer">
          <div className='gradient'>
            <div className='structure1'>          
            <div className='structure'>
              <div className="menu">
                <div className="n-l">
                  <div className="logo"></div>
                  <div className="name-title"><h1>Tripadvisor</h1></div>
                </div>
                <div className='home'>HOME</div>
                <div className='about'>ABOUT US</div>
                <div className='contact'>CONTACT US</div>
              </div>
              <Link to="/signup" style={{ textDecoration: 'none' }}><div className="loginsignupcard">
                  {(!isLoggedIn) ? <ProfileCard message = "Login or Sign Up"/> : <ProfileCard message = {"Welcome " + first_name + " " + last_name}/>}
              </div></Link>
            </div>
              {!this.state.showClasses ? <HomeContent onClick={this.swapContent} /> : <ClassesPage onClickMainCard = {this.swapContent}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn : state.isLoggedIn,
  first_name : state.first_name,
  last_name : state.last_name,
  user_id : state.user_id
  
});
   
export default connect(mapStateToProps)(App);