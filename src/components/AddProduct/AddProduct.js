import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import "./AddProduct.css";
import { CircularProgress, CircularProgressWithLabel } from "@mui/material";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  return (
    <section className="add-product">
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
        <form
          className="form-control"
          onSubmit={(e) => {
            e.preventDefault();
            const email = user.email;
            const name = e.target.name.value;
            const price = e.target.price.value;
            const quantity = e.target.quantity.value;
            const suplierName = user.displayName || user.email;
            const imageUrl = e.target.imageUrl.value;
            const description = e.target.description.value;
            const product = {
              email,
              name,
              price,
              quantity,
              suplierName,
              imageUrl,
              description,
            };
            const url = `https://sleepy-bayou-43362.herokuapp.com/cars`;
            fetch(url, {
              method: "POST",
              body: JSON.stringify(product),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((data) => alert(data));
            e.target.reset();
          }}
        >
          <h1>ADD PRODUCT</h1>
          <div className="input-area">
            <input
              type="email"
              value={user.email}
              disabled
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="input-area">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="input-area">
            <input type="number" name="price" placeholder="Price" />
          </div>
          <div className="input-area">
            <input type="number" name="quantity" placeholder="Quantity" />
          </div>
          <div className="input-area">
            <input
              type="text"
              name="suplierName"
              value={user.displayName}
              disabled
              placeholder="Suplier Name"
            />
          </div>
          <div className="input-area">
            <input type="text" name="imageUrl" placeholder="Image Url" />
          </div>
          <div className="input-area">
            <input
              type="text"
              name="description"
              placeholder="Details About Product"
            ></input>
          </div>
          <div className="button-area">
            <button className="btn" type="submit">
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
