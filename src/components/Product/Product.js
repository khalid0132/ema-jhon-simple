import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product.name);
  return (
    <div className="product-style">
      <div className="product-photo">
        <img src={props.product.img}></img>
      </div>
      <div className="product-history">
        <p>
          <h3>Product-detail: </h3>
          {props.product.name}
        </p>
        <h4>Category: {props.product.category}</h4>
        <h4>Price: ${props.product.price}</h4>
      </div>
    </div>
  );
};

export default Product;
