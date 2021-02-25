import React, { useState } from "react";
import "../../fakeData";
import fakeData from "../../fakeData";
import "./Shop.css";
const Shop = () => {
  // console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  console.log(first10);
  const [products, setProducts] = useState(first10);
  return (
    <div className="shop-container">
      {/* <h1>Shopping here</h1>
      <h3> Number of Products:{products.length}</h3> */}
      <div className="product-container">
        <ul>
          {/* {products.map(pd => <img src= {pd.img}></img>)} */}
          {products.map((pd) => (
            <li>{pd.name} </li>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <h1>This is cart</h1>
      </div>
    </div>
  );
};

export default Shop;
