import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import "./App.css";
import Signup from "./pages/signup";
import Home from "./pages/home";

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  componentDidMount() {
    this.getUser()
  }
  updateUser (userObject) {
    this.setState(userObject)
  }
  getUser() {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        this.setState({
          loggedIn: false, 
          username: null
        });
      }
    })
  }
  render(){
    return (
      <Router>
        <div>
      <Route exact path="/" component={Signup} />
      <Route exact path="/home" component={Home} />

        </div>

      </Router>
    );
  }
}


export default App;
