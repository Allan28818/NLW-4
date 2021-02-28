import React, { useState } from "react";
import { Form } from "@unform/web";

import { Link } from "react-router-dom";

import Input from "../components/Input";

import api from "../services/connectToAPI";

const SurveysCreation = () => {
  const [hashesResponse, setHashesResponse] = useState("Waiting for the data...");

  async function createASurvey(FormData) {
    try {
      const response = await api.post("/surveys", {
        title: FormData.title,
        description: FormData.description
      });
      alert(
        `Survey created:
         title: ${response.data.title}
         hash: ${response.data.id}`);
      setHashesResponse("Hash: " + response.data.id);
    } catch(err) {
      setHashesResponse("Cannot create the survey" + err);
    }
      
  }

  return(
  <>
  <header
  className = "title-wrapper-foreign">
    <h1>Add an survey to your list</h1>
  </header>
  <Link to = "/">Home</Link>
  <h4 className = "subtitle">Insert the title and description to add the survey to your list</h4>        

  <Form 
  onSubmit = {createASurvey}>
    <label>
      Put here the title:
    </label>
    <Input 
    name = "title"
    placeholder = "Title"/>
    <br/>
    <label>
      Put here the survey's description:
    </label>
    <Input
    name = "description"
    placeholder = "Description"/>
    <br />
    <button
    type = "submit" 
    className = "sender"
    >CREATE</button>
  </Form>
  <p className = "paragraph-results">{ hashesResponse }</p>
  </> 
  );
}

export default SurveysCreation;