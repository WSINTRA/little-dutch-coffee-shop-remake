import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import React from "react";
import close from "../images/Close.png"

const MenuHeader = (props) => (

  props.loggedIn ? 
  <div className="menu">
   <div className="menu__selection"><span><ul onClick={(e)=>props.activeLinkSelect(e.target.innerText)}>
   <Link to="/weekly-menu"><li>Weekly Menu</li></Link>
   {/**<Link to="/cbd-menu"><li>CBD Menu</li></Link>**/}
 
   <Link to="/our-story"><li>Our Story</li></Link>
   <Link to="/account"><li name="Account">Your Account</li></Link></ul>
   <ul className="logout">
   <li onClick={()=>props.logOut()}>Logout</li></ul></span>
   
   <div className="menu__selection-close"
   onClick={()=>props.openCloseMenu()}>
   <img alt="close button"src={close}/></div>
   </div>
   </div> : 
   <div className="menu">
   <div className="menu__selection"><ul>
   <Link to="/our-story"><li>Our Story</li></Link>
   <Link to="/statement"><li>Statement</li></Link>
   <li><a href="#login">Log in</a></li>
   <li><a href="#register">Register</a></li></ul>
   <div className="menu__selection-close"
   onClick={()=>props.openCloseMenu()}>
   <img alt="close button"src={close}/></div>
   </div>
   </div>
);

function mdp(dispatch){
  return {
    openCloseMenu: (action)=>{
      dispatch({type:"TOGGLE_MENU", payload:action})
      }
    }
  }



function msp(store){
  return {
    loggedIn: store.loggedIn,
    menuOpen: store.menuOpen
  }
}

export default connect(msp,mdp)(MenuHeader);
