import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="login-section">
          <form className="login-control">
            <div className="input-area">
              <input type="email" required placeholder="Eamil Address" />
            </div>
            <div className="input-area">
              <input type="password" required placeholder="Password" />
            </div>
            <div className="button-area">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
