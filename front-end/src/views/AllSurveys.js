import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../services/connectToAPI";

class AllSurveys extends Component{
  state = {
    surveys: []
  }
  
  componentDidMount() {
    this.loadSurveys();
  }

  loadSurveys = async () => {
    const response = await api.get("/surveys");

    this.setState({surveys : response.data});
  }

  VerifySurveysLength = () => {
    if(this.state.surveys === null || 
      this.state.surveys === undefined || 
      this.state.surveys.length === 0) {
      return (
        <>
          <h4 className = "out-of-data">Sorry we don't have any survey!</h4>
        </>
      );
    } 
    return (<></>);
  }

  render() {
    const { surveys } = this.state;
    return(
    <>    
     <header
     className = "title-wrapper-foreign"
     >
       <h1>See all surveys</h1>
    </header>  
     <Link to = "/">Home</Link>
     <h4 className = "subtitle">You can make your survey <Link to = "/createASurvey">here</Link></h4>
     <this.VerifySurveysLength />
     {
      surveys.reverse(),
      surveys.map(survey => (
        <>
          <article
          className = "survey-article"
          key= { survey.id }>
            <h3 className = "survey-title">{ survey.title }</h3>
            <p className = "survey-description">{ survey.description }</p>
            <p className = "survey-hash">hash: { survey.id }</p>
          </article>
        </>
      ))
     }
    </>);
  }
}

export default AllSurveys;