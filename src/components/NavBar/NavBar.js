import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./NavBar.css";
import auth from "../../firebase";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <header className="container">
        <div className="logo">
          <Link to="/" className="logo-text">
            CAR <span>DEALER</span>
          </Link>
        </div>
        <nav className="nav-section">
          <ul className="main-menu">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>{user ? user.displayName : <Link to="/login">LOGIN</Link>}</li>
            <li>
              {user ? (
                <button className="btn signout" onClick={logout}>
                  SIGN OUT
                </button>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
