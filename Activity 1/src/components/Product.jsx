import React from "react";
import "./Product.css";
import Price from "./Price";

function Product({ title, index }) {
  let oldPrice = ["12,495", "11900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let Description = [
    ["8,000 DPI", "5 Programming buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{Description[index][0]}</p>
      <p>{Description[index][0]}</p>
      <Price oldPrice={oldPrice[index]} newPrice={newPrice[index]} />
    </div>
  );
}

export default Product;
