import React from "react";

const SignupForm = () => {
  return (
    <div className="container">
      <h2>Signup Form</h2>
      <form className="signup">
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email adress</label>
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
        If you have already signed up you can login <a href="/">here</a>
      </p>
    </div>
  );
};

export default SignupForm;
