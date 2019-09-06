import React from "react";
import BackDrop from "./BackDrop"
import menuOpen from "../svg/Menu.svg";
import { Link } from 'react-router-dom'

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
	          <Link to="/menu">Menu</Link>
	          </li>
	            <li>
	          	<Link to="/our-story">Our Story</Link>
	          </li>
	            <li>
	          	<Link to="/statement">Statement</Link>
	          </li>
	            <li>
	          	<Link to="/account">Account</Link>
	          </li>
	            <li>
	          	<Link to="/logout">Logout</Link>
	          </li>
	        </ul>
      	</div>
    </div>

    </div>

  </div>
);

export default MenuComp;