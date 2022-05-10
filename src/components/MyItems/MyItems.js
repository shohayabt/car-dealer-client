import React, { useEffect, useState } from "react";
import TableData from "../TableData/TableData";
import "./MyItems.css";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/car")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/deleteCar/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <section>
      <div className="container d-flex-c">
        <div className="table">
          <table className="table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>SUPLIER NAME</th>
                <th>PRICE</th>
                <th>ID</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <TableData
                    key={product._id}
                    delete={deleteProduct}
                    product={product}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyItems;
