import React from "react";
import logo from "../images/header-logo.png";
import menuOpen from "../svg/Menu.svg";
import CartOverview from "./CartOverview"
import cart from "../svg/custom-cart.svg"
import { connect } from 'react-redux'

const Header = (props) => (
 <div className="header"> 
 <div className="header__logo"  ><img alt="logo"src={logo}/></div>
 <div className="header__menu" 
 onClick={()=>props.openCloseMenu()}>
 <img src={menuOpen}alt="open menu button"/><br/>
 </div>
 <div className="header__cart" >

   {props.loggedIn ? <img className="cart-svg" alt="cart" src={cart}
  onClick={()=>props.openCloseCart()}/>: null}<br/>
  </div>
  {props.cartOpen ? <CartOverview/> : null}
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
