import React, { Component } from 'react';
import './ClassDescriptionPage.css';
import DesciptionCards from './DescriptionCards/DesciptionCards';
import ReviewDescription from '../ReviewDescription/ReviewDescription';
import LoadingSpinner from '../../FinalPage/LoadingSpinner';

class ClassDescriptionPage extends Component {
    
    constructor(){
        super();
        this.handleBackClick = this.handleBackClick.bind(this);   
        this.state = {
            dataValue: [],
            loaded: false,
            cardClicked: false,
            cardData: null,
            isLoading: true,
            loadedC: false,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.fetchFromDB = this.fetchFromDB.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this)
    }
    handleBackClick(){
        if (!this.state.cardClicked)
        {
            this.props.transitionBackClick(null);
            this.props.transitionFunction();    
        }
        else{
            // console.log(this.props.category)
            this.state.cardClicked = false
            this.props.transitionBackClick(this.props.category);
            this.props.transitionFunction();
        }
        
    }
    fetchFromDB = () => {
        const bodyData = JSON.stringify({
          place_category: this.props.category,
        });
        fetch('https://test1-4dk76hxqra-el.a.run.app/place', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: bodyData,
        })
          .then((response) => response.json())
          .then((data1) => {
            this.setState({ isLoading: false,loadedC: true })
            if (data1.result !== false) {
              this.setState({
                dataValue: data1.list,
                loaded: true
              });
            }
          });
      };
      handleCardClick(card){
        this.setState({
            cardClicked: true,
            cardData:card
        })
      }
      componentDidMount() {
        this.fetchFromDB();
      }    
      render() {
        const {dataValue, loaded} = this.state
        const { isLoading, loadedC } = this.state;
        return (
            <div className='main-content'>
                <div className='back-button' onClick = {this.handleBackClick} style={{cursor: 'pointer'}}>
                &lt;&lt;&lt; Go Back
                </div>
                <div className='container-full'>

                {isLoading &&                   <div className='load-spinner'><div className="loading-spinner"></div></div>}
              
                {!this.state.cardClicked? (this.state.dataValue.map((card, index) => <DesciptionCards key={index} onClick={event => this.handleCardClick(card)} textContent = {card.description} imageSrc = {card.image} nameContent = {card.place_name} addressContent = {card.place_address} ratingContent = {card.overall_rating} />)) : <ReviewDescription dataCard = {this.state.cardData}/>}
                </div>
            </div>
        );
    }
}

export default ClassDescriptionPage;