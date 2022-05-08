import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import "./AddProduct.css";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <section className="add-product">
      <div className="container">
        <form className="form-control">
          <div className="input-area">
            <input
              type="email"
              value={user.email}
              name=" email"
              placeholder="Email"
            />
          </div>
          <div className="input-area">
            <input type="text" name=" name" placeholder="Name" />
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
              name="suplier name"
              value={user.displayName}
              placeholder="Suplier Name"
            />
          </div>
          <div className="input-area">
            <input type="text" name="Image Url" placeholder="Image Url" />
          </div>
          <div className="input-area">
            <input
              type="text"
              name="description"
              placeholder="Details About Product"
            ></input>
          </div>
          <div className="button-area">
            <button className="btn">ADD PRODUCT</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
