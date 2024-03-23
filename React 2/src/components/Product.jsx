import React from "react";
import "./Product.css";

function Product({ title, price }) {
  // 1st method  {Brute force approch length method}

//   if (price > 30000) {
//     return (
//       <div className="Product">
//         <p>{title}</p>
//         <p>Price : {price}</p>
//         <p>Discount of 5%</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="Product">
//         <p>{title}</p>
//         <p>Price : {price}</p>
//       </div>
//     );
//   }
// }


// 2nd method  

// let isDiscount=price>=30000 ? "Discount of 5%":null
//   return (
//     <div className="Product">
//       <p>{title}</p>
//       <p>Price : {price}</p>
//       <p>{isDiscount}</p>
//     </div>
//   );


// 3 method 

/*extra p will we create in case of null condition  */
return (
  <div className="Product">
    <p>{title}</p>
    <p>Price : {price}</p>
    { <p>{price>30000 ? "Discount of 5%":null}</p> } 
  </div>
);
 


// 4 th method
// return (
//   <div className="Product">
//     <p>{title}</p>
//     <p>Price : {price}</p>
//     {price>30000 ? <p>Discount Of 5%</p>:<null/>}    //  no extra p will created
//   </div>
// );

}

export default Product;
