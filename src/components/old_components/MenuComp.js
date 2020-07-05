import React from "react";
import BackDrop from "./BackDrop"
import menuOpen from "../svg/Menu.svg";
import { Link } from 'react-router-dom'

const MenuComp = (props) => (
  <div className="menu-comp">
      <div className="menu-comp__backdrop">
	    <BackDrop/>
	   </div>
       

  </div>
);

export default MenuComp;