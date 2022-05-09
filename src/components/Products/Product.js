import React from "react";
import { useEffect, useState } from "react";
import { MediaCard } from "../ProductCard/Card";
import "./Product.css";

export const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/car")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container service">
        <h2 className="title">services</h2>
        <div className="card-container">
          {products.map((product) => (
            <MediaCard key={product._id} product={product}></MediaCard>
          ))}
        </div>
      </div>
    </>
  );
};
