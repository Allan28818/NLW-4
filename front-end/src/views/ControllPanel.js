import React,{ useState } from "react";
import { Form } from "@unform/web";
import Input from "../components/Input";
import { Link } from "react-router-dom";

import api from "../services/connectToAPI"

const ControllPanel = () => {
  const [npsData, setNpsData] = useState({
    promoters: "Waiting for the hash",
    passive: "",
    detractors: "",
    totalAnswers: "",
    nps: ""
  });

  async function getSurveyByTheHash(hash) {
   const response = (await api.get(`/nps/${hash.content}`)).data;    

    setNpsData({
      promoters: "Promoters: " + response.promoters,
      passive: "Passive: " + response.passive,
      detractors: "Detractors: " + response.detractors,
      totalAnswers: "Total answers: " + response.totalAnswers,
      nps: "Nps: " + response.nps
    });
  
  }

  function ControllPanelResults() {
    return(
      <>
        <p className = "paragraph-results">{ npsData.promoters }</p>
        <p className = "paragraph-results">{ npsData.passive }</p>
        <p className = "paragraph-results">{ npsData.detractors }</p>
        <p className = "paragraph-results">{ npsData.totalAnswers }</p>
        <p className = "paragraph-results">{ npsData.nps }</p>
      </>
    );
  }
  return(
    <>      
      <header 
      className = "title-wrapper-foreign">
        <h1>View your results</h1>
      </header>
      <Link to = "/">Home</Link>
      <h4 className = "subtitle">You can see the result of your survey adding your survey's hash 
        to the input
      </h4>

      <Form 
      onSubmit = {getSurveyByTheHash}>
        <label 
        for = "content">
        Put here the hash:
        </label>
        <Input 
        name = "content"
        placeholder = "Hash"/>        
        <br/>
        <button
        type = "submit"
        className = "sender"
        >SEE</button>     
      </Form>  
      <ControllPanelResults/>
    </>
  );
}

export default ControllPanel;