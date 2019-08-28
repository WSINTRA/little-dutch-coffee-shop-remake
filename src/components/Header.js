import React from "react";
import logo from "../images/header-logo.png";
import menuOpen from "../svg/Menu.svg";

const Header = (props) => (
 <div className="header"> 
 <div className="header__logo"  ><img alt="logo"src={logo}/></div>
 <div className="header__menu" 
 onClick={()=>props.menuButton()}>
 <img src={menuOpen}alt="open menu button"/></div>
</div>
);

export default Header;
