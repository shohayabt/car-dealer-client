import React from "react";
import "./Signup.css";
import { useState } from "react";
import auth from "../../firebase";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const Signup = () => {
  // UPDATING PROFILE
  const [displayName, setDisplayName] = useState("");
  const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

  // GOOGLE SIGN IN
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // SIGN IN WITH EMAIL AND PASSWORD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);

  const notify = (message) => toast(message);
  if (error) {
    notify(error.message);
  }
  if (loading) {
    return (
      <section>
        <div className="container d-flex-c loading">
          <CircularProgress value={100} />;
        </div>
      </section>
    );
  }
  return (
    <section id="signup">
      <Toaster />
      <div className="container">
        <div className="signup-section">
          <form
            className="signup-control"
            onSubmit={async (event) => {
              event.preventDefault();
              createUserWithEmailAndPassword(email, password);
              await updateProfile({ displayName });
              await sendEmailVerification(email);
              notify("VERIFICATION MAIL SENT");
            }}
          >
            <div className="input-area">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="input-area">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-area">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn ">
              Signup
            </button>
            <div className="button-area">
              <button
                className="btn google-signup"
                onClick={async () => await signInWithGoogle()}
              >
                Signup with goolge
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
