import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const [car, setCar] = useState({});
  const params = useParams();

  const navigate = useNavigate();

  const { name, imageUrl, description, price, quantity, suplierName, _id } =
    car;

  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  });

  // ADD STOCK
  const handleUpdate = (event) => {
    event.preventDefault();
    const restockQuantity = event.target.restock.value;
    const updatedRestock =
      parseInt(productQuantity) + parseInt(restockQuantity);
    const updatedProductQuantity = updatedRestock.toString();
    const updateQuantity = { updatedProductQuantity };

    //update data
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  //handle stock add
  const productQuantity = quantity;

  // HANDLEDELIVERED
  const handleDelivered = () => {
    let quantity = 0;
    if (productQuantity > 0) {
      quantity = parseInt(productQuantity) - 1;
    }

    const updatedProductQuantity = quantity.toString();
    const updateQuantity = { updatedProductQuantity };

    //update data
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <section className="updateProduct">
      <div className="button-area d-flex-c">
        <button
          className="btn"
          onClick={() => {
            navigate("/management");
          }}
        >
          Manage Inventories
        </button>
      </div>
      <div className="container">
        <div className="productInformation">
          <div className="image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="name d-flex-b">
            <h2 className="name">{name}</h2>
            <h2 className="name">
              {quantity > 0 ? `TOTAL: ${quantity}` : "SOLD OUT"}
            </h2>
          </div>
          <div className="about">
            <p>{description}</p>
          </div>
          <div className="name d-flex-b">
            <h2 className="name">{price}</h2>
            <h2 className="name">{suplierName}</h2>
          </div>
          <div className="button-area d-flex-c">
            <button className="btn" onClick={handleDelivered}>
              DELIVERED
            </button>
          </div>

          <form className="d-flex-c" onSubmit={handleUpdate}>
            <div className="input-area d-flex-col">
              <input type="number" required name="restock" />
              <div className="button-area">
                <button className="btn " type="submit">
                  UPDATE STOCK
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProduct;
