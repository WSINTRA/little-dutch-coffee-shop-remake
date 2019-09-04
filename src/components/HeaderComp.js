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
      <div className="header-comp__menu-bar">
        <ul>
          <li>
          	Menu
          </li>
            <li>
          	Our Story
          </li>
            <li>
          	Statement
          </li>
            <li>
          	Account
          </li>
            <li>
          	Logout
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
      <img src={menuOpen}alt="open menu button"/>
      </div>
  </div>
);
//fix menu button for mobile so a new menu opens on click
export default HeaderComp;
