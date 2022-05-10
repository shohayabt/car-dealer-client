import React from "react";

const TableData = (props) => {
  const deleteData = props.delete;
  const {
    name,
    imageUrl,
    description,
    price,
    quantity,
    suplierName,
    _id,
    email,
  } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{suplierName}</td>
      <td>{price}</td>
      <td>{_id}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn signout"
          onClick={(id) => {
            deleteData(_id);
          }}
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default TableData;
