import React, { useState } from "react";
import axios from "axios";
import AuthenticationContainer from "../component/AuthenticationContainer/index";
import InnerAuthenticationContainer from "../component/InnerAuthenticationContainer/index";
import AuthenticationForm from "../component/AuthenticationForm/index";
import HeaderTwo from "../component/HeaderTwo/index";
import AuthenticationParagraph from "../component/AuthenticationParagraph/index";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState("")
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
        if (response.status === 200) setRedirect(true) 
      })
      .catch((err) => {
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
    <AuthenticationContainer>
      <InnerAuthenticationContainer>
      <HeaderTwo>Login</HeaderTwo>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <AuthenticationForm>
          <label className="form-label" htmlFor="username">
            Username
          </label>

          <input
            className="username-input"
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </AuthenticationForm>
        <AuthenticationForm>
          <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="password-input"
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> </div>
        </AuthenticationForm>
        <AuthenticationForm>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </AuthenticationForm>
      </form>
      {message && <div>{message}</div>}
      <AuthenticationParagraph>
        Or Signup <a href="/">here</a>
      </AuthenticationParagraph>
      </InnerAuthenticationContainer>
    </AuthenticationContainer>
  );
};
export default LoginForm;
