import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="twtter-feed">
          <h2 className="footer-title">twtter feed</h2>
          <div className="twitter">
            <div className="twitter-post">
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="post-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptas eum dignissimos.
                </p>
                <h4>12/12/2021</h4>
              </div>
            </div>
            <div className="twitter-post">
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="post-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptas eum dignissimos.
                </p>
                <h4>12/12/2021</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
