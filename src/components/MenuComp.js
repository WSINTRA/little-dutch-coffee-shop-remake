import React from "react";
import BackDrop from "./BackDrop"
import menuOpen from "../svg/Menu.svg";

const MenuComp = (props) => (
  <div className="menu-comp">

	  <div className="menu-comp__backdrop">
	    <BackDrop/>
	    </div>
    <div className="menu-comp__display">
    <div className="mobile-menu">
      <img src={menuOpen}alt="open menu button"/>
      </div>
    <div >
     	<div className="header-comp__menu-bar">
	        <ul onClick={(e)=>props.selectMenuItem(e)} >
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
    </div>

    </div>

  </div>
);

export default MenuComp;