import React from "react";
import { useEffect, useState } from "react";
import { MediaCard } from "../ProductCard/Card";
import "./Product.css";

export const Product = () => {
  const [products, setProducts] = useState([]);

  const car = products.slice(0, 6);
  useEffect(() => {
    fetch("http://localhost:5000/car")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container product">
        <h2 className="title">PRODUCT</h2>
        <div className="card-container">
          {car.map((car) => (
            <MediaCard key={car._id} product={car}></MediaCard>
          ))}
        </div>
      </div>
    </>
  );
};
