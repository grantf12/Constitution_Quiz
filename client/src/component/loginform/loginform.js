import React, { Component } from "react";
import {Redirect} from "react-router-dom"
import axios from "axios";


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        if (response.status === 200) {
          
          this.setState({
            redirectTo: "/home",
          });
        }
      })
      
  }
  
  render() {
    if(this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo}}
 />    } else {
   
      return (
        <div>
          <h4>Login</h4>
          <form className="form-horizontal">
            <div className="form-group">
              <label className="form-label" htmlFor="username">
                Username
              </label>

              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  />
            </div>
            <div className="form-group">
              <button className="btn btn-primary"
              onClick={this.handleSubmit}
              type="submit">Login</button>
            </div>
            
          </form>
          <p>Or Signup <a href="/">here</a></p>
        </div>
      );
    }
  }
}
export default LoginForm