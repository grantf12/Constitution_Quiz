import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
import Signup from "./pages/signup";
import Home from "./pages/home";

const App = () => {
  
    return (
      <Router>
        <div>
      <Route exact path="/" component={Signup} />
      <Route exact path="/home" component={Home} />

        </div>

      </Router>
    );
  }


export default App;
