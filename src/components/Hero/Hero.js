import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="welcome-side">
          <h3 className="welcome-text">welcome</h3>
          <h1>
            <span>I'm</span> Truly Happy You're Here.
          </h1>
          <p>
            The car dealer assists customers who are looking to purchase a new
            or used vehicle. They converse with customers to find out their
            budget and wish list, helping them find a suitable car that matches
            their needs. In addition to selling cars, the car salesperson orders
            and arranges payments with the shipper.
          </p>
          <button className="btn">Explore more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
