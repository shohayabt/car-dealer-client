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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            quisquam aliquam commodi ad sit qui sint officiis eius, numquam a ea
            harum hic ratione temporibus consectetur dolorem, non ipsam
            laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur a maiores odio libero id quidem. Dolores at vitae quae
            laborum!
          </p>
          <button className="btn">Explore more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
