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
	        <ul  >
	          <li onClick={(e)=>props.selectMenuItem(e)}>
	          <Link to="/menu">Weekly Menu</Link>
	          </li>
	            <li onClick={(e)=>props.selectMenuItem(e)}>
	          	<Link to="/our-story">Our Story</Link>
	          </li>
	            <li onClick={(e)=>props.selectMenuItem(e)}>
	          	<Link to="/statement">Statement</Link>
	          </li>
	            <li onClick={(e)=>props.selectMenuItem(e)}>
	          	<Link to="/account">Account</Link>
	          </li>
	            <li onClick={(e)=>props.selectMenuItem(e)}>
	          	<Link to="/logout">Logout</Link>
	          </li>
	        </ul>
      	</div>
    </div>

    </div>

  </div>
);

export default MenuComp;