// Product.jsx
import React from "react";
import "./Product.css";
import { Linter } from "eslint";

function Product({ title, price, features, features2 }) {
  // const list=features.map((feature)=> <li>{feature}</li>)
  return (
    <div className="Product">
      <p>{title}</p>
      <p>Price: {price}</p>
    


    </div>
  );
}

export default Product;
