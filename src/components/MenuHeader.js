
import React from "react";
import close from "../images/Close.png"
const MenuHeader = (props) => (
  <div className="menu">
   <ul><li>Products</li>
   <li>Our Story</li>
   <li>Statement</li>
   <li>Log in</li>
   <li>Register</li></ul>
   <div className="menu__close"
   onClick={()=>props.menuButton()}>
   <img alt="close button"src={close}/></div>
   </div>
);

export default MenuHeader;
