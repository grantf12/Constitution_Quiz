import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import "./App.css";
import Signup from "./pages/signup"
import Signin from "./pages/signin"
class App extends Component {
  
  render(){
    return (
      <Router>
        <div>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      
        </div>

      </Router>
    );
  }
}


export default App;
