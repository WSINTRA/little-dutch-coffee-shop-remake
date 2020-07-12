import React, {useState} from "react";
import { connect } from 'react-redux';
import checkoutOrder from './checkoutOrder';


const cartTotal = (cartItems)=>{
let total = 0
for (var i = cartItems.length - 1; i >= 0; i--) {
  total += parseFloat(cartItems[i].price)
}
return total
}

const removeFromCart=(props, item)=>{
props.removeItemFromCart(item)
}

const submitCheckOut=(order, userId)=>{
  // console.log("send this to create an order", order, userId)
  checkoutOrder(order, userId)
}
const CartOverview = (props)=> {

	return (
	<div className="default-comp">
  <div className="cart-display"><h3>CURRENT ORDER</h3><br/>
  <div className="cart-items">
   {props.cartItems.map(item=><div key={item.id}>{item.title} : ${item.price}<button onClick={()=>removeFromCart(props, item.id)}>remove</button></div>)}
   </div>
   Total: ${cartTotal(props.cartItems).toFixed(2)}
   <div className="cart-checkout" onClick={()=>submitCheckOut(props.cartItems, props.user)}>Checkout</div>
   <div className="cart-checkout">Save for later</div>
 {/**When the checkout button is pressed do something!!**/}
   </div>
  
  </div>
  );
}


function mdp(dispatch){
  return {
    removeItemFromCart: (action)=>{
      dispatch({type:"REMOVE_FROM_CART", payload:action})
    },
      closeCart: (action)=> {
      dispatch({ type: "TOGGLE_CART_OVERVIEW", payload: action });
    }
  }
}
function msp(state){
return {
	cartItems: state.cartItems,
  user: state.userData
}
}
export default connect(msp,mdp)(CartOverview);