import React, { useEffect, useState } from "react";
import "./Footer.css";
import {
  FaCheckCircle,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhoneSquare,
  FaRegEnvelope,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/car")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi voluptas eum dignissimos.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi voluptas eum dignissimos.
                  </p>
                  <h4>12/12/2021</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="images">
            <h4 className="footer-title">IMAGES</h4>
            <div className="image-map">
              {product.map((image) => {
                return (
                  <div className="single-image">
                    <img src={image.imageUrl} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="contact-information">
            <h4 className="footer-title">CONTACT INFORMATION</h4>
            <div className="about">
              <span className="information-area">
                <div className="icon">
                  <FaRegEnvelope />
                </div>
                <div className="mail">
                  <p>shohayabhasan@yahoo.com</p>
                </div>
              </span>
              <span className="information-area">
                <div className="icon">
                  <FaPhoneSquare />
                </div>
                <div className="mail">
                  <p>
                    0162690260000 <br /> 0199999999991
                  </p>
                </div>
              </span>
              <span className="information-area">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="mail">
                  <p>GAZIPUR, DHAKA BANGLADESH</p>
                </div>
              </span>
              <span className="information-area">
                <div className="icon">
                  <FaPhoneSquare />
                </div>
                <div className="mail">
                  <p>
                    0162690260000 <br /> 0199999999991
                  </p>
                </div>
              </span>
              <span className="information-area">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="mail">
                  <p>GAZIPUR, DHAKA BANGLADESH</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <footer className="d-flex-c footer-text">
        Copyright <pre> </pre> <FaCheckCircle /> <pre> </pre>All rights reserved
        by TALHA.
      </footer>
    </>
  );
};

export default Footer;
