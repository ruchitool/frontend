import React, { Component } from 'react';
import './ReviewBox.css'

class ReviewBox extends Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      this.props.onDataChanged(event.target.value);
    }
    render() {
      return (
        <div className='data'>
            <textarea type="text" onChange={this.handleInputChange} placeholder="Enter your review..." className="textbox"/>
        </div>
      );
    }
  }
     
  export default ReviewBox;