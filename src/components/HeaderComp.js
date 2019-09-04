import React from "react";
import logo from "../images/header-logo.png";
import cart from "../svg/custom-cart.svg"
import menuOpen from "../svg/Menu.svg";

const HeaderComp = (props) => (
  <div className="header-comp">
    <div className="header-comp__banner">
        <div className="header-comp__logo">
        <img className="logo-img"alt="logo"src={logo}/>
        </div>
      <img className="cart-svg" alt="cart" src={cart}/>
    </div>
     
      
  </div>
);
//fix menu button for mobile so a new menu opens on click
export default HeaderComp;
