import React from "react";
import { Form } from "@unform/web";

import { Link } from "react-router-dom";

import Input from "../components/Input";

import api from "../services/connectToAPI";

const SendMail = () => {

  async function emailSender(FormData) {
    try{
      await api.post("/sendMail", {
        email: FormData.email,
        survey_id: FormData.hash
      });
      alert("Your e-mail was sent")
    } catch(err) {
      alert("Cannot send your e-mail");
    }
  }
  return(
    <>      
      <header
      className = "title-wrapper-foreign">
        <h1>Send an email</h1>
      </header>
      <Link to = "/">Home</Link>
      <h4 className = "subtitle">You can send an email for a user that already exists in any list</h4>
      <label>
      Put here the e-mail to send:
      </label>

      <Form
        onSubmit = { emailSender }>
        <Input 
        name = "email"
        placeholder = "E-mail"
        type = "email"/>
        <br/>
        <label>
          Put here the survey's hash to send for the user:
        </label>
        <Input
        name = "hash"
        placeholder = "Hash"/>
        <br />
        <button
        type = "submit" 
        className = "sender"
        >SEND</button>            
      </Form>    
    </>
  );
}

export default SendMail;