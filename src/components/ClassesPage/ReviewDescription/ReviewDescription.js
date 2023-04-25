import React, { Component } from 'react'
import ReviewCards from './ReviewCards/ReviewCards';
import './ReviewDescription.css'
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';
import LoadingSpinner from '../../FinalPage/LoadingSpinner';

class ReviewDescription extends Component {
  constructor() {
    super();
    this.state = {
      imageSrc: null,
      reviewList: [],
      reviewLoaded: false,
      throwPopUp: false,
      isClicked: false,
      changePage: false,
      isLoading: true,
    }
    this.handleReviewClick = this.handleReviewClick.bind(this);
    this.fetchReviewsFromDB = this.fetchReviewsFromDB.bind(this);
  }
  fetchReviewsFromDB = () => {
    const placeId = this.props.dataCard.id;
    const bodyData = JSON.stringify({
      placeId: placeId
  })
    fetch(`https://test1-4dk76hxqra-el.a.run.app/category`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: bodyData
      })
      .then((response) => response.json())
      .then((data1) => {
        // console.log(data1); // Log the response from the API to the console
        this.setState({
          isLoading: false
        })
        if (data1.result !== false) {
          console.log(data1)
          this.setState({
            reviewList: data1.list,
            reviewLoaded: true
          });
        }
      });
  };
  handleReviewClick(){
    this.setState({
      isClicked: true
    })
    console.log(this.state.isClicked)
    if (!this.props.isLoggedIn){
      this.setState({
        throwPopUp: true
      })
    }
    console.log(this.state.throwPopUp) 
    if (this.state.isClicked == true && this.state.throwPopUp == false){
      this.setState({
        changePage:true
      })
      this.props.dispatch({ type: 'REVIEW' ,place_id: this.props.dataCard.id});
    }
   
  }

  componentDidMount() {
    this.fetchReviewsFromDB(); 
    const imageSrc = `data:image/jpeg;base64,${this.props.dataCard.image}`;
    this.setState({ imageSrc });
  }
  render() {
    const { imageSrc, isLoading} = this.state;
    
    const { first_name,last_name,user_id, isLoggedIn } = this.props;
    return (
      
      <div className='main-content'>
          <div className='row-flex-alpha'>
            <div className='image-thumbnail-main'>
              {imageSrc ? <img src={imageSrc} className='imageFull' /> : null}
            </div>
            <div className='text-data'>
              <div className='title-data'>
              Place Name: {this.props.dataCard.place_name }
              </div>
              <div className='rating'>
              Place Rating: {this.props.dataCard.overall_rating}
              </div>
              <div className='address-main'>
                Place Address: {this.props.dataCard.place_address}
              </div>
              <div className='content-description-main'>
                About <br/>
                {this.props.dataCard.description}
              </div>
              
              <div className = "SubmitButton">{(this.state.changePage)? (<Navigate to= {'/Final'} replace={true}
      /> ) : (this.state.throwPopUp && (<div className='error'>Please Log In to Add your review</div>)) } <button onClick = {this.handleReviewClick}  className='button-lit-r'>Add Your Review</button>  </div>
            </div>
          </div>
          
          <div className='review-main'>Reviews: <br/>
          {isLoading && <div className='load-spinner'><div className="loading-spinner"></div></div>}
          {this.state.reviewList.map((card, index) => <ReviewCards key={index+1} dataCard = {card} />)}
          </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isLoggedIn : state.isLoggedIn,
  first_name : state.first_name,
  last_name : state.last_name,
  user_id : state.user_id,
  place_id : state.place_id
  
});

export default connect(mapStateToProps)(ReviewDescription);
