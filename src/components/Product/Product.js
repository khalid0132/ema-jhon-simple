import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  console.log(props.product.name);
  //   const {img, name, seller, price} = props.product;
  // we can write <h4>By: {seller}</h4> instead of <h4>seller: {props.product.seller}</h4>
  return (
    <div className="product-style">
      <div className="product-photo">
        <img src={props.product.img}></img>
      </div>
      <div className="product-history">
        <h4 style={{ color: "blue" }}>{props.product.name}</h4>
        <p>
          <small>by: {props.product.seller}</small>
        </p>

        <p>${props.product.price}</p>
        {/* <br/> */}
        <p>only {props.product.stock} left in stock- order soon</p>
        <button className="button-style"><FontAwesomeIcon icon={faShoppingCart} /><span>add to cart</span></button>
      </div>
    </div>
  );
};

export default Product;
