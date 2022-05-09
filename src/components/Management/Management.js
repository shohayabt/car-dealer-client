import React from "react";
import "./Management.css";
import { useEffect, useState } from "react";
import "../Products/Product.css";
import { DeleteCard } from "../DeleteCard/DeleteCard";

export const Management = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/car")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/deleteCar/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <div className="container product">
        <h2 className="title">PRODUCT</h2>
        <div className="card-container">
          {products.map((car) => (
            <DeleteCard
              key={car._id}
              delete={deleteProduct}
              product={car}
            ></DeleteCard>
          ))}
        </div>
      </div>
    </>
  );
};
