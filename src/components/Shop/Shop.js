import React, { useState } from "react";
import "../../fakeData";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  console.log(first10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct =(product) =>{
      console.log('product added', product);
      const newCart = [...cart, product]; // Inside an array otherwise const newCart = cart+1
      setCart(newCart);
  }
  return (
    <div className="shop-container">
      {/* <h1>Shopping here</h1>
      <h3> Number of Products:{products.length}</h3> */}
      <div className="product-container">
 
          {/* {products.map(pd => <img src= {pd.img}></img>)} */}
          {products.map((pd) => (<Product handleAddProduct={handleAddProduct} product = {pd}> </Product>))}
    
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
        {/* <h1>This is cart</h1>
        <h5>Items ordered: {cart.length}</h5> */}
      </div>
    </div>
  );
};

export default Shop;
