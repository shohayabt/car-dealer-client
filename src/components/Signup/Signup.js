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
  return (
    <section id="signup">
      <div className="container">
        <div className="signup-section">
          <form
            className="signup-control"
            onSubmit={async (event) => {
              event.preventDefault();
              createUserWithEmailAndPassword(email, password);
              await updateProfile({ displayName });
              await sendEmailVerification();
              console.log("VERIFICATION MAIL SENT");
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
                placeholder="Name"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-area">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Name"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn ">
              Signup
            </button>
            <div className="button-area">
              <button
                className="btn google-signup"
                onClick={() => signInWithGoogle()}
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
