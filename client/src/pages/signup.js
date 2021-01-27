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
            <input
              className="username-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </AuthenticationForm>
          <AuthenticationForm>
            <br />
            <input
              className="password-input"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </AuthenticationForm>
          <br />
          <AuthenticationForm>
            <button
              className="submit-button"
              type="submit"
            >
              Sign in!
            </button>
          </AuthenticationForm>
        </form>
        <AuthenticationParagraph>Already have an account? Login <a className="authorization-form-switch" href="/loginform">here.</a></AuthenticationParagraph>
      </InnerAuthenticationContainer>
    </AuthenticationContainer>
  );
}

export default Signup;