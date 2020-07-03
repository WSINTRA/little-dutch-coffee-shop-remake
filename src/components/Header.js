import React from "react";
import logo from "../images/header-logo.png";
import menuOpen from "../svg/Menu.svg";
import { Link } from 'react-router-dom'
import CartOverview from "./CartOverview"
import cart from "../svg/custom-cart.svg"
import { connect } from 'react-redux'

const Header = (props) => (
 <div className="header"> 
 <img style={{"width": "150px" }}alt="logo"src={logo}/>
    <div className="desktop-nav">
      <ul>
        <li>
        <Link> Home </Link>
        </li>
        <li>
          <Link> Products </Link>
        </li>
        <li>
          <Link> Account </Link>
        </li>
        <li>
          <Link> Logout </Link>
        </li>
      </ul>
    </div>
    <div className="mobile-header">
    <img onClick={()=>props.openCloseMenu()}
    src={menuOpen}alt="open menu button"/>
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
		loggedIn: state.loggedIn
	}
}

export default connect(msp,mdp)(Header);


{/* <div className="header__menu" 
onClick={()=>props.openCloseMenu()}>
   <img src={menuOpen}alt="open menu button"/><br/>
</div>
<div className="header__cart" >
{props.loggedIn ? <img className="cart-svg" alt="cart" src={cart}
  onClick={()=>props.openCloseCart()}/>
  : 
  null}
 {props.cartOpen ? <CartOverview/> : null}
</div> */}