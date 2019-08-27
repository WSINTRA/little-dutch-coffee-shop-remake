import React from "react";
import logo from "../images/header-logo.png"
import menuOpen from "../svg/Menu.svg"

const Header = () => (
 <div className="header"> 
 <div className="header__logo"  ><img src={logo}/></div>
 <div className="header__menu" 
 onClick={()=>console.log("menu clicked")}>
 <img src={menuOpen}/></div>
</div>
);

export default Header;
