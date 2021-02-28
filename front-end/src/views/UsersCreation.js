import React from "react";
import { Form } from "@unform/web";

import { Link } from "react-router-dom";

import Input from "../components/Input";

import api from "../services/connectToAPI";

const UsersCreation = () => {

  async function createAnUser(FormData) {
    try{
     await api.post("/users", {
        name: FormData.name,
        email: FormData.email
      });

      alert(`User ${ FormData.name } was created!`);
    } catch(err) {
      if(err.toString() === "Error: Request failed with status code 400") {
        alert("E-mail already exists");
      } else {
        alert("Internal server error, try it later");
      }
      
    }
  }
  return(
  <>  
  <header
  className = "title-wrapper-foreign">  
  <h1>Add an user to your list</h1>
  </header>
  <Link to = "/">Home</Link>  
  <h4 className = "description-foreign">Insert the user name and his e-mail to add the user to your list</h4>

  
  <Form
  onSubmit = { createAnUser }>
    <label for = "name">
        Put here the user name:
      </label>
      <Input 
      name = "name"
      placeholder = "Name"/>
      <br/>
      <label for = "email">
        Put here the user's e-mail:
      </label>
      <Input
      name = "email"
      placeholder = "E-mail"
      type = "email"/>
      <button
      type = "submit" 
      className = "sender"
      >CREATE</button>
  </Form>
  </>
  );
}

export default UsersCreation;