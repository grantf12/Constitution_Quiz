import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] =useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.status)
        if (response.status === 200) setRedirect(true) && setAuthenticated(true)
      })
      .catch((err)=>{
        console.log(err.response.data)
        if (err.response.data === "Unauthorized") setMessage("Your username and password do not match our records")
        else setMessage("Server Error Please Try Again Later")
        console.log(err);
        
      });
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <h4>Login</h4>

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
            placeholder="username"
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
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
      {message && <div>{message}</div>}
      <p>
        Or Signup <a href="/">here</a>
      </p>
    </div>
  );
};
export default LoginForm;
