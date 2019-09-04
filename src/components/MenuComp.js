import React from "react";
import BackDrop from "./BackDrop"
const MenuComp = (props) => (
  <div className="menu-comp">
	  <div className="menu-comp__backdrop">
	    <BackDrop/>
	    </div>
    <div className="menu-comp__display">
    <div className="title">Weekly Menu</div></div>
  </div>
);

export default MenuComp;