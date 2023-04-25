import React, { Component } from 'react';
import './HomeContent.css';
import { Link } from "react-router-dom";

class HomeContent extends Component {
    render() {
        return (
            <div className='home-page'>
                
                <div className="content-main">
                    <div className="white-line"></div>
                    <div className="content-main-text">
                        <p>PLAN YOUR <br/> PERFECT TRIP</p>
                    </div>
                     
                    <div className='bengaluru-cover' style={{cursor: 'pointer'}} onClick={this.props.onClick}>
                        <div className='bengaluru-image'></div>
                        <div className='bengaluru-name'>
                            BENGALURU
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent;