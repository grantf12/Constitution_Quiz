import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Signup from "./component/signupform/signup";
import Login from "./component/loginform/loginform";
import Home from "./pages/home";
import quiz from "./pages/quiz";
import Constitution from "./pages/constitution";
import ProtectedRoute from "./utils/ProtectedRoutes"
class App extends Component {
  constructor() {
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
  updateUser(userObject) {
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
    console.log(this.loggedIn)
  }
  render() {
    return (
      <Router>
       
          <Route exact path="/" component={Signup} />
          <Route exact path="/loginform" component={Login} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/quiz" component={quiz} />
          <Route exact path="/constitution" component={Constitution} />
          <ProtectedRoute path="/home" component={Home} isAuth={this.state.loggedIn}/>

      </Router>
    );
  }
}


export default App;
