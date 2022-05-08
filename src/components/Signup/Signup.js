import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <section id="signup">
      <div className="container">
        <div className="signup-section">
          <form className="signup-control">
            <div className="input-area">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" required placeholder="Name" />
            </div>
            <div className="input-area">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" required placeholder="Name" />
            </div>
            <div className="input-area">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Name"
              />
            </div>
            <button type="submit" className="btn ">
              Signup
            </button>
            <div className="button-area">
              <button className="btn google-signup"> Signup with goolge</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
