import React, { Component } from 'react'
import './ReviewCards.css'

export default class ReviewCards extends Component {
  render() {
    return (
      <div className='main-card-review'>
        <div className='user-bar-data'>
          <div className='user-name'>
            {this.props.dataCard.user_name}
          </div>
          <div className='rating-value'>
            {this.props.dataCard.predicted_rating}.0/5.0
          </div>
        </div>
        <div className='review-content'>
            {this.props.dataCard.content}
        </div>
      </div>
    )
  }
}
