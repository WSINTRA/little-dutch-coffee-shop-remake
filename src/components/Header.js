import React from "react";
import logo from "../images/header-logo.png";
import menuOpen from "../svg/Menu.svg";
import { Link } from 'react-router-dom'
import close from "../images/Close.png"
import CartOverview from "./CartOverview"
import cart from "../svg/custom-cart.svg"
import { connect } from 'react-redux'

const Navigation = ()=>{
 return (
 
      <ul>
        <li>
        <Link to="/menu"> Weekly menu </Link>
        </li>
        <li>
          <Link> Stash box </Link>
        </li>
        <li>
          <Link to="/account"> Account </Link>
        </li>
        <li>
          <Link> Logout </Link>
        </li>
      </ul>
    )
}

const Header = (props) => (
 <div className="header"> 
 <Link to="/"><img style={{"width": "150px" }}alt="logo"src={logo}/></Link>
    <div className="desktop-nav">
     <Navigation/>
    </div>
    <div className="mobile-header">
     {
     props.menuOpen ? 
     <img onClick={()=>props.openCloseMenu()} alt="close button" src={close}/> :
     <img onClick={()=>props.openCloseMenu()} alt="open menu button" src={menuOpen}/>
     } 
    
     {props.menuOpen ? 
     <div className="mobile-nav">
     <Navigation/>
     </div> : console.log(props)}
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