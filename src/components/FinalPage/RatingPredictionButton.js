import React, { Component } from 'react';
import './RatingPredictionButton.css';
import LoadingSpinner from './LoadingSpinner';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';


class RatingPredictionButton extends Component {
    constructor(props) {
        super(props);

      

        this.state = {
          data: null,
          error: null,
          isLoading: false,
          loaded: false,
          selectedOption: '',
          showAdditionalElements: false,
          selectedOptionR: ''
        };
        this.handleClickWithEdit = this.handleClickWithEdit.bind(this);
        this.handleClickWithoutEdit = this.handleClickWithoutEdit.bind(this);
      }
      handleOptionChangeR = (event) => {
        this.setState({ selectedOptionR: event.target.value });
      }
      handleOptionChange = (event1) => {
        
        this.setState({
          selectedOption: event1.target.value,
          showAdditionalElements: event1.target.value === 'yes'
        });
      }
    
      handleClick = () => {
        this.setState({ isLoading: true, loaded: false });
        console.log(this.props.data)
        fetch("https://asia-south1-collegeproject-380416.cloudfunctions.net/Predictor", {
                        method: "POST",
                        mode: 'cors',
                        header: { "Content-Type": "application/json" },
                        body: JSON.stringify({ data: this.props.data })})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({ data:data.data, isLoading: false,loaded: true });
        })
        .catch(error => {
            this.setState({ error:error, isLoading: false,loaded: false });
        });
      };
      
      handleClickWithEdit(){
        fetch('https://test1-4dk76hxqra-el.a.run.app/rating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: this.props.data,
            predictedRating: this.state.data,
            editedRating: this.state.selectedOptionR,
            userId: this.props.user_id,
            placeId: this.props.place_id
        })
        })
        
      }
      handleClickWithoutEdit(){
        fetch('https://test1-4dk76hxqra-el.a.run.app/rating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: this.props.data,
            predictedRating: this.state.data,
            userId: this.props.user_id,
            placeId: this.props.place_id
        })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // handle response data
        })
        .catch(error => {
            console.error('Error:', error);
        });

      }
    render() {
      const { isLoading, loaded } = this.state;
      return (
        <div className='button'>
            <button onClick = {this.handleClick} className='button-lit'>Get Rating</button>
            {isLoading && <div className="loading-spinner"></div>}
            {loaded && <div className='result'>Your Predicted Rating Star is {this.state.data}<br/><br/>Would you like to change it?
                <div className='radios'>
                <br/><label>
                    <input
                        type="radio"
                        name="option"
                        value="yes"
                        checked={this.state.selectedOption === 'yes'}
                        onChange={this.handleOptionChange}
                    />
                    Yes <span></span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="no"
                        checked={this.state.selectedOption === 'no'}
                        onChange={this.handleOptionChange}
                    />
                    No
                </label>
                </div>
            </div>
            }
            {(this.state.selectedOption==='no') && <div className='submitprocess'>
            <div className='info-data'>Click on Submit Button to Continue<br/><br/></div>
            <div className='submit-button' onClick = {this.handleClickWithoutEdit} ><SubmitButton/></div>
            </div>}
            {this.state.showAdditionalElements && <div className='newrating'>
                <div className='raters'>
                    <label>
                        <input
                            type="radio"
                            name="option1"
                            value="1"
                            checked={this.state.selectedOptionR === '1'}
                            onChange={this.handleOptionChangeR}
                        />
                        1 <span></span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="option1"
                            value="2"
                            checked={this.state.selectedOptionR === '2'}
                            onChange={this.handleOptionChangeR}
                        />
                        2
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="option1"
                        value="3"
                        checked={this.state.selectedOptionR === '3'}
                        onChange={this.handleOptionChangeR}
                    />
                    3 <span></span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="option1"
                            value="4"
                            checked={this.state.selectedOptionR === '4'}
                            onChange={this.handleOptionChangeR}
                        />
                        4
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="option1"
                        value="5"
                        checked={this.state.selectedOptionR === '5'}
                        onChange={this.handleOptionChangeR}
                    />
                    5 <span></span>
                    </label>
                </div>
                {(this.state.selectedOptionR !== '') && <div className='confirmationText' ><br/>You have selected Rating as {this.state.selectedOptionR}<br/><br/>
                <div className='submitprocess'>
            <div className='info-data'>Click on Submit Button to Continue<br/><br/></div>
            <div className='submit-button' onClick={this.handleClickWithEdit}><SubmitButton/></div>
            </div>
                </div>}
            
            </div>}
        </div>
      );
    }
  }
const mapStateToProps = state => ({
isLoggedIn : state.isLoggedIn,
first_name : state.first_name,
last_name : state.last_name,
user_id : state.user_id,
place_id : state.place_id
});     
  export default connect(mapStateToProps)(RatingPredictionButton);