import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      {/* <h1>I am header</h1> */}
      <img src={logo} alt="" />
      <nav>
        <a href="/Shop">Shop</a>
        <a href="/OrderReview">Order Review</a>
        <a href="/Manage">Manage Inventory</a>
      </nav>
      <div className = "search-input">
          <span><input placeholder= "type here to search" type="text"/ ></span>
      </div>
    </div>
  );
};

export default Header;
