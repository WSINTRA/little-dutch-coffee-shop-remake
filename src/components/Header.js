import React from "react";
import logo from "../images/header-logo.png";
import menuOpen from "../svg/Menu.svg";
import { Link } from 'react-router-dom'
import close from "../images/Close.png"
import { connect } from 'react-redux'
import {useSpring, animated} from 'react-spring';

const Navigation = (props)=>{
  const page = useSpring({opacity: 1, from: {opacity: 0}})
 return (
  <animated.div style={page}>
      <ul>
        <li>
        <Link to="/menu"> Weekly menu </Link>
        </li>
        <li>
          <Link to="/"> Stash box </Link>
        </li>
        <li>
          <Link to="/account"> Account </Link>
        </li>
        <li>
          <Link onClick={()=>props.logout()} to="/"> Logout </Link>
        </li>
      </ul>
      </animated.div>
    )
}

const Header = (props) => (
 <div className="header"> 
 <Link to="/"><img style={{"width": "150px" }}alt="logo"src={logo}/></Link>
    <div className="desktop-nav">
     <Navigation {...props}/>
    </div>
    <div className="mobile-header">
     {
     props.menuOpen ? 
     <img onClick={()=>props.openCloseMenu()} alt="close button" src={close}/> :
     <img onClick={()=>props.openCloseMenu()} alt="open menu button" src={menuOpen}/>
     } 
    
     {props.menuOpen ? 
     
     <div className="mobile-nav">
     <Navigation {...props}/>
     </div> : null}
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
function msp(state){
	return {
		menuOpen: state.menuOpen
	}
}

export default connect(msp,mdp)(Header);