import React from "react";
import { connect } from 'react-redux';
import checkoutOrder from './checkoutOrder';

const cartTotal = (cartItems)=>{
let total = 0
for (var i = cartItems.length - 1; i >= 0; i--) {
  total += parseFloat(cartItems[i].price)
}
return total
}

const submitCheckOut=(order, userId)=>{
  console.log("send this to create an order", order, userId)
  checkoutOrder(order, userId)
}
const CartOverview = (props)=> {
	return (
	<div className="cart-overview">
	
  <div className="cart-display"><h3>SHOPPING CART</h3><br/>
  <div className="cart-items">
   {props.cartItems.map(item=><div key={item.id}>{item.title} : ${item.price}</div>)}
   </div>
   Total: {cartTotal(props.cartItems).toFixed(2)}
   <div className="cart-checkout" onClick={()=>submitCheckOut(props.cartItems, props.user)}>Checkout</div>
 {/**When the checkout button is pressed do something!!**/}
   </div>
  
  </div>
  );
}
function msp(state){
return {
	cartItems: state.cartItems,
  user: state.userData
}
}
export default connect(msp)(CartOverview);