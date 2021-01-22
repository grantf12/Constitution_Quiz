import React from "react";

function LoginForm() {
  return (
    <div className="container">
      <h2>Login Form</h2>
      <form className="login">
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-default">
          Login
        </button>
      </form>
      <br />
      <p>
        Or sign up <a href="/signup">here</a>{" "}
      </p>
    </div>
  );
}

export default LoginForm;
