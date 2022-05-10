import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Alert } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // login-with-google-account
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  if (error) {
    <Alert variant="filled" severity="error">
      <p>{error.message}</p>
    </Alert>;
  }
  return (
    <section id="login">
      <div className="container">
        <div className="login-section">
          <form
            className="login-control"
            onSubmit={(event) => {
              event.preventDefault();
              signInWithEmailAndPassword(email, password);
            }}
          >
            <div className="input-area">
              <label htmlFor="email"> Email:</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Eamil Address"
              />
            </div>
            <div className="input-area">
              <label htmlFor="password"> Password:</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
            <div className="toggle-area">
              <Link to="/signup" className="toggle-button btn">
                create new account
              </Link>
              <button className="btn login-button " type="submit">
                Login
              </button>
              <Link to="/reset-password" className="toggle-button btn">
                reset password
              </Link>
            </div>
            <p className="or">or</p>
            <div className="button-area">
              <button
                className="btn google-button"
                onClick={() => signInWithGoogle()}
              >
                LOGIN WITH GOOGLE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
