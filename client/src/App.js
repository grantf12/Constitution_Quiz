import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
import Signup from "./pages/signup"
import Signin from "./pages/signin"
const  App = () => {
  
    return (
      <Router>
        <div>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      
        </div>

      </Router>
    );
  }


export default App;
