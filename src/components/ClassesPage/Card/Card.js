import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    render() {
        return (
            <div className='main-card' onClick={this.props.onClick} style={{cursor: 'pointer'}}>
                <div className='image-frame'  >
                    <img src={this.props.image} className="image" />
                </div>
                <div className='title'>
                    {this.props.title}
                </div>
                <div className='description'>
                    {this.props.description}
                </div>                
            </div>
        );
    }
}

export default Card;