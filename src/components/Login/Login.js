import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="login-section">
          <form className="login-control">
            <div className="input-area">
              <label htmlFor="email"> Email:</label>
              <input type="email" required placeholder="Eamil Address" />
            </div>
            <div className="input-area">
              <label htmlFor="password"> Password:</label>
              <input type="password" required placeholder="Password" />
            </div>
            <div className="toggle-area">
              <Link to="/signup" className="toggle-button btn">
                create new account
              </Link>
              <Link to="/reset-password" className="toggle-button btn">
                reset password
              </Link>
            </div>
            <p className="or">or</p>
            <div className="button-area">
              <button className="btn google-button">LOGIN WITH GOOGLE</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
