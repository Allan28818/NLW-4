import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./views/index";
import UsersCreation from "./views/UsersCreation";
import SurveysCreation from "./views/SurveysCreation";
import AllSurveys from "./views/AllSurveys";
import SendMail from "./views/SendMail";
import ControllPanel from "./views/ControllPanel";

import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = { Index }/>
          <Route path = "/createAnUser" component = { UsersCreation }/>
          <Route path = "/createASurvey" component = { SurveysCreation }/>
          <Route path = "/allSurveys" component = { AllSurveys }/>
          <Route path = "/sendMail" component = { SendMail }/>
          <Route path = "/controllPanel" component = { ControllPanel }/>

          <Route component = { NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
