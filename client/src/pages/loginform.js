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
            <input
              className="username-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </AuthenticationForm>
          <AuthenticationForm>
            <br />
            <input
              className="password-input"
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <br />
          </AuthenticationForm>
          <br />
          <AuthenticationForm>
            <button className="submit-button" type="submit">
              Login!
          </button>
          </AuthenticationForm>
        </form>
        {message && <div>{message}</div>}
        <AuthenticationParagraph>
          Don't have an account yet? Sign up <a className="authorization-form-switch" href="/">here.</a>
        </AuthenticationParagraph>
      </InnerAuthenticationContainer>
    </AuthenticationContainer>
  );
};
export default LoginForm;
