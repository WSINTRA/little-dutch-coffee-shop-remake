import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import React from "react";
import close from "../images/Close.png"

const MenuHeader = (props) => (

  props.loggedIn ? 
  <div className="menu">
   <div className="menu__selection"><ul onClick={(e)=>props.activeLinkSelect(e.target.innerText)}>
   <Link to="/weekly-menu"><li>Weekly Menu</li></Link>
   <Link to="/cbd-menu"><li>CBD Menu</li></Link>
   <Link to="/our-story"><li>Our Story</li></Link>
   <Link to="/account"><li name="Account">Your Account</li></Link>
   </ul>
   <div className="menu__selection-close"
   onClick={()=>props.menuButton()}>
   <img alt="close button"src={close}/></div>
   </div>
   </div> : 
   <div className="menu">
   <div className="menu__selection"><ul>
   <Link to="/our-story"><li>Our Story</li></Link>
   <Link to="/statement"><li>Statement</li></Link>
   <Link to="/menu"><li><a href="#login">Log in</a></li></Link>
   <Link to="/menu"><li><a href="#register">Register</a></li></Link></ul>
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
