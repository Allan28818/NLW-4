import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/index.css";
import "../styles/creation-pages.css";
import "../styles/base-foreign.css";
import "../styles/all-surveys.css"

const Index = () => {
  return (
  <>
    <header 
    className = "title-wrapper">
      <h1 
      className = "title">
        <font color = "#32cd32">{"<"}</font>
        <font color = "#fff">NLW</font>
        <font color = "#32cd32">{"/>"}</font></h1>
    </header>

    <h3 className = "subtitle">Welcome to NPS system!</h3>
    <p className = "description">
      You can make your survey and send an email for
      a list of added users.<br />The survey has an avaliation
      <br />from 1 to 10, and you can see all the result with your hash
    </p>
    <ul className = "link-list">
      <li><Link to = "/createAnUser" className = "routes-links">Create a user</Link></li>
      <li><Link to = "/createASurvey" className = "routes-links">Create a survey</Link></li>
      <li><Link to = "/sendMail" className = "routes-links">Send an e-mail</Link></li>
      <li><Link to = "/allSurveys" className = "routes-links">All surveys</Link></li>
      <li><Link to = "/controllPanel" className = "routes-links">Controll panel</Link></li>
    </ul>
  </>)
}

export default Index;