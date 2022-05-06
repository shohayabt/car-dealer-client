import React from "react";
import "./About.css";
import image from "../../images/warehouse-about.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="title-section">
          <h1 className="title">ABOUT US</h1>
        </div>
        <div className="about-information">
          <div className="about-image">
            <img src={image} alt="" />
          </div>
          <div className="information">
            <h3>
              welcome to <span>car dealer</span>
            </h3>
            <p>
              Transpress makes business flow. As one of the world’s leading
              non-asset-based supply chain management companies, we design and
              implement industry-leading solutions in both freight management.
              Over 42,000 dedicated employees, working in 17 regional clusters
              around the globe, deliver operational excellence
            </p>
            <button className="btn">read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
