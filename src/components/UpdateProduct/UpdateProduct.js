import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const [car, setCar] = useState({});
  const params = useParams();
  const id = params.id;

  const { name, imageUrl, description, price, quantity, suplierName, _id } =
    car;
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/car/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  });
  return (
    <section className="updateProduct">
      <div className="button-area d-flex-c">
        <button className="btn">MANAGE INVENTORY</button>
      </div>
      <div className="container">
        <div className="productInformation">
          <div className="image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="name d-flex-b">
            <h2 className="name">{name}</h2>
            <h2 className="name">TOTAL:{quantity}</h2>
          </div>
          <div className="about">
            <p>{description}</p>
          </div>
          <div className="name d-flex-b">
            <h2 className="name">{price}</h2>
            <h2 className="name">{suplierName}</h2>
          </div>
          <div className="button-area d-flex-c">
            <button className="btn">DELIVERED</button>
          </div>

          <form className="d-flex-c">
            <div className="input-area d-flex-col">
              <input type="number" required />
              <div className="button-area">
                <button className="btn">UPDATE STOCK</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProduct;
