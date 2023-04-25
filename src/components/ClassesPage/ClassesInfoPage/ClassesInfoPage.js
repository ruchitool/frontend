import React, { Component } from 'react';
import "./ClassesInfoPage.css";
import Card from "../Card/Card";
import image1 from '.././images/sightSeeing.jpg';
import image2 from '.././images/adventure.jpg';
import image3 from '.././images/funActivities.jpg';
import image4 from '.././images/dineout.jpg'

class ClassesInfoPage extends Component {
    
    constructor(props) {
        super(props);
        
        this.handleCardClick = this.handleCardClick.bind(this);
        this.constants = {
            cards: [
                {
                    title: "SIGHT SEEING",
                    image: image1,
                    description: "Visit to Check the Best of the Sight Seeing places in Bengaluru. From Exploring the peaks of Nandi Hills to the Monoliths of Savandurga."
                },
                {
                    title: "ADVENTURE",
                    image: image2,
                    description: "Visit to Check the Best of the Adventure places in Bengaluru. From Paragliding to Motor Riding in this city of Adventure and Thrill. "
                },
                {
                    title: "FUN ACTIVITIES",
                    image: image3,
                    description: "Visit to Check the Best of the Fun Activity places in Bengaluru. From Exploring the Fun point like TORQ to the Swings of Wonderla"
                },
                {
                    title: "DINE-OUT",
                    image: image4,
                    description: "Visit to Check the Best of the DINE-OUT places in Bengaluru. Explore the Exquisite Restaurants with the most cheerful Pubs in the silicon city of India."
                }
            ]
        };
    }
    handleCardClick(category){

            this.props.transitionCardClick(category);
            
            this.props.transitionFunction();
    }

    render() {
        return (
            <div className='class-home'>
                    <div className="content-main">
                    <div className="white-line"></div>
                    <div className="content-main-text">
                        <p>PLAN YOUR<br/> TRIP TO <br/> BENGALURU</p>
                    </div>
                    <div className='card-back-button'>
                        <div className='back' style={{cursor: 'pointer'}} onClick={this.props.onClickMainCard}>
                            &lt;&lt;&lt; Go Back  
                        </div>
                        <div className='card-cover' >
                            {/* <Card title = "SIGHT SEEING" image = {image1} description="Visit to Check the Best of the Sight Seeing places in Bengaluru. From Exploring the peaks of Nandi Hills to the Monoliths of Savandurga."/>
                            <Card title = "ADVENTURE" image = {image2} description="Visit to Check the Best of the Adventure places in Bengaluru. From Paragliding to Motor Riding in this city of Adventure and Thrill. "/>
                            <Card title = "FUN ACTIVITIES" image = {image3} description="Visit to Check the Best of the Fun Activity places in Bengaluru. From Exploring the Fun point like TORQ to the Swings of Wonderla"/>
                            <Card title = "DINE-OUT" image = {image4} description="Visit to Check the Best of the DINE-OUT places in Bengaluru. Explore the Exquisite Restaurants with the most cheerful Pubs in the silicon city of India."/> */}
                            {this.constants.cards.map((card, index) => <Card key={index+1} onClick={event => this.handleCardClick(card.title)} title = {card.title} image = {card.image} description={card.description}  />)}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}


export default ClassesInfoPage;