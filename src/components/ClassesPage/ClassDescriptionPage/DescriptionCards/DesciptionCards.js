import React, { Component } from 'react'
import './DescriptionCards.css'

export default class DesciptionCards extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: null
    }
  }

  componentDidMount() {
    const imageSrc = `data:image/jpeg;base64,${this.props.imageSrc}`;
    this.setState({ imageSrc });
  }

  render() {
    const { imageSrc } = this.state;
    return (
      <div className='main-content1' onClick={this.props.onClick}>
        <div className='image-thumbnail'>
          {imageSrc ? <img src={imageSrc} className='image' /> : null}
        </div>
        <div className='row-content'>
          <div className='column-name-content'>
            <div className='name-content'> {this.props.nameContent}</div>
            <div className='rating-content'> {this.props.ratingContent}/5.0</div>
          </div>
          <div className='address-content'>{this.props.addressContent}</div>
          <div className='content-text'>{this.props.textContent}</div>
          <div className='adjuster-last'>
            <div className='adjuster'></div>
            <div className='read-more-button'>Read More &gt;&gt;&gt;</div>
          </div>
        </div>
      </div>
    )
  }
}
