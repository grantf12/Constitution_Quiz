import React, { Component } from "react";
import axios from "axios";


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    console.log(this.state.username);
    e.preventDefault();
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        if (!response.data.errmsg) {
          this.setState({
            redirectTo: "/loginform",
          })
        }
      });
  }
  render() {
    return (
      <div className="signupForm">
        <h4> Sign up</h4>
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
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              placeholder="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={this.handleSubmit}
              type="submit"
            >
              Sign Up!
            </button>
          </div>
        </form>
        <p>Or login  <a href="/loginform">here</a></p>
      </div>
    );
  }
}

export default Signup