
import React from "react";
import close from "../images/Close.png"
const MenuHeader = (props) => (
  <div className="menu">
   <div className="menu__selection"><ul>
   <li>Our Story</li>
   <li>Statement</li>
   <li>Log in</li>
   <li>Register</li></ul>
   <div className="menu__selection-close"
   onClick={()=>props.menuButton()}>
   <img alt="close button"src={close}/></div>
   </div>
   </div>
);

export default MenuHeader;
