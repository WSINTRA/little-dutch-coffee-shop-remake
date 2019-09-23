import { connect } from 'react-redux'
import React from "react";
import close from "../images/Close.png"

const MenuHeader = (props) => (

  props.loggedIn ? 
  <div className="menu">
   <div className="menu__selection"><ul onClick={(e)=>props.activeLinkSelect(e.target.innerText)}>
   <li>Weekly Menu</li>
   <li>CBD Menu</li>
   <li>Our Story</li>
   <li name="Account">Your Account</li>
   </ul>
   <div className="menu__selection-close"
   onClick={()=>props.menuButton()}>
   <img alt="close button"src={close}/></div>
   </div>
   </div> : 
   <div className="menu">
   <div className="menu__selection"><ul>
   <li>Our Story</li>
   <li>Statement</li>
   <li><a href="#login">Log in</a></li>
   <li><a href="#register">Register</a></li></ul>
   <div className="menu__selection-close"
   onClick={()=>props.menuButton()}>
   <img alt="close button"src={close}/></div>
   </div>
   </div>
);


function msp(store){
  return {
    loggedIn: store.loggedIn
  }
}

export default connect(msp)(MenuHeader);
