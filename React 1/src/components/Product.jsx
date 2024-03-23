import React from "react";
import "./Product.css";

function Product({ title, price, features }) {
  const list=features.map((feature,index)=> <li>{feature}</li>);
  return (
    <div className="Product">
      <p>{title}</p>
      <p>Price: {price}</p>
   
<p>{list}</p>
    </div>
  );
}

export default Product;
