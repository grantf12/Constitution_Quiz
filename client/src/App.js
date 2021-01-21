import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
import Signup from "./pages/signup"

const  App = () => {
  
    return (
      <Router>
        <div>
      <Route exact path="/" component={Signup} />

        </div>

      </Router>
    );
  }


export default App;
