import React, { Component } from 'react';
import './ProfileCard.css';
import { CgProfile } from "react-icons/cg";

class ProfileCard extends Component {
    render() {
     
      return (
        <div className='card-profile'>
                
            <div className="profilelogo"><CgProfile/></div>
            <div className="loginsignup-text">{this.props.message}</div>
        </div>
        )
    }
}
export default ProfileCard;