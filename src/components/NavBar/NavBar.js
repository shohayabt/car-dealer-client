import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <header className="container">
        <div className="logo">
          <a href="#" className="logo-text">
            CAR <span>DEALER</span>
          </a>
        </div>
        <nav className="nav-section">
          <ul className="main-menu">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
