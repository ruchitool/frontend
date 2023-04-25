import React, { Component } from 'react';
import ReviewBox from './components/FinalPage/ReviewBox';
import VoteOfThanks from './components/FinalPage/VoteOfThanks';
import RatingPredicitonButton from './components/FinalPage/RatingPredictionButton';
import './FinalPage.css';


class FinalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: ''
        };
        this.handleDataChange = this.handleDataChange.bind(this);
      }
    
      handleDataChange(newData) {
        this.setState({ data: newData });
      }
    
    render () {
        return (
            <div className="background-body">
                <div className = "filter-layer">
                <div className='gradient'>
                <div className='finalpage'>
                    <VoteOfThanks/>
                    <div className='rater'>

                        <ReviewBox className = "box" onDataChanged={this.handleDataChange}/>
                        <div className = "right-column">
                            <RatingPredicitonButton data={this.state.data} className="button"/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default (FinalPage);