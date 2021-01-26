import React, { useState } from "react";
import axios from "axios";
import AuthenticationContainer from "../component/AuthenticationContainer/index";
import InnerAuthenticationContainer from "../component/InnerAuthenticationContainer/index";
import AuthenticationForm from "../component/AuthenticationForm/index";
import HeaderTwo from "../component/HeaderTwo/index";
import AuthenticationParagraph from "../component/AuthenticationParagraph/index";
import { Redirect } from "react-router-dom";


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
  if (redirect) {
    return <Redirect to="/loginform" />;
  }
  return (
    <AuthenticationContainer>
      <InnerAuthenticationContainer>
        <HeaderTwo> Sign up</HeaderTwo>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <AuthenticationForm>
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
          </AuthenticationForm>
          <AuthenticationForm>
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
              autoComplete="off"
            />
          </AuthenticationForm>
          <AuthenticationForm>
            <button
              className="btn btn-primary"
              type="submit"
            >
              Sign Up!
            </button>
          </AuthenticationForm>
        </form>
        <AuthenticationParagraph>If you're already signed up you can login <a href="/loginform">here</a></AuthenticationParagraph>
      </InnerAuthenticationContainer>
    </AuthenticationContainer>
  );
}

export default Signup;