import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import { Product } from "../Products/Product";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Subscribe />
      <Product />
    </div>
  );
};

export default Home;
