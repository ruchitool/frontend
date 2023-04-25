import React, { Component } from 'react'
import ClassesInfoPage from './ClassesInfoPage/ClassesInfoPage'
import ClassDescriptionPage from './ClassDescriptionPage/ClassDescriptionPage';

export default class ClassesPage extends Component {
  constructor(){
    super();
    this.state = {
      category: null,
      showDescription: false
    };
    this.transitionPage = this.transitionPage.bind(this);
    this.setDescriptionInfo = this.setDescriptionInfo.bind(this);
  }
  transitionPage(category){
    this.category = category
  }
  setDescriptionInfo(){
    if(this.category !== null){
      this.setState({showDescription: true})
    }
    else {
      this.setState({showDescription: false})
    }
  }
  render() {
    return (
      <div>
        {!this.state.showDescription ? <ClassesInfoPage onClickMainCard={this.props.onClickMainCard} transitionCardClick={this.transitionPage} transitionFunction = {this.setDescriptionInfo}/> : <ClassDescriptionPage transitionFunction = {this.setDescriptionInfo} transitionBackClick = {this.transitionPage} category={this.category}/>}
      </div>
    )
  }
}
