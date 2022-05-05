import React from "react";
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
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
