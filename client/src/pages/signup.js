import React, { Component, useState } from "react";
import axios from "axios";
import { set } from "lodash";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("/user/", {
      username,
      password,
    }).then((response) => {
      if (!response.data.errmsg) {
        setRedirect(true)

      }
    }).catch((err) => {
      console.log(err)
    })
  }
    return (
      <div className="signupForm">
        <h4> Sign up</h4>
        <form className="form-horizontal" onSubmit={handleSubmit}>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    );
  }


export default Signup