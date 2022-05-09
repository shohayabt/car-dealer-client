import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const [car, setCar] = useState({});
  const params = useParams();
  const id = params.id;
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/car/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return;
  <section className="updateProduct">
    <div className="contianer">
      <div className="productInformation">HELLO FROM OTHER SIDE</div>
    </div>
  </section>;
};

export default UpdateProduct;
