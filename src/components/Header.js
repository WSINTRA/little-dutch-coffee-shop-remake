import React from "react";
import logo from "../images/header-logo.png";
import menuOpen from "../svg/Menu.svg";
import cart from "../svg/custom-cart.svg"

const Header = (props) => (
 <div className="header"> 
 <div className="header__logo"  ><img alt="logo"src={logo}/></div>
 <div className="header__menu" 
 onClick={()=>props.menuButton()}>
 <img src={menuOpen}alt="open menu button"/><br/>
 </div>
 <div className="header__cart" >

  <img className="cart-svg" alt="cart" src={cart}
  onClick={()=>props.openCloseCart()}/><br/>
  </div>
  {props.cartOpen ? <div className="cart-overview">
  <div className="cart-display">SHOPPING CART</div></div> : null}
</div>
);

export default Header;
