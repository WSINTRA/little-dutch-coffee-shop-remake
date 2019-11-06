import React from "react";
import { connect } from 'react-redux';

const cartTotal = (cartItems)=>{
let total = 0
for (var i = cartItems.length - 1; i >= 0; i--) {
  total += parseFloat(cartItems[i].price)
}
return total
}

const CartOverview = (props)=> {
	return (
	<div className="cart-overview">
	
  <div className="cart-display"><h3>SHOPPING CART</h3><br/>
  <div className="cart-items">
   {props.cartItems.map(item=><div>{item.title} : ${item.price}</div>)}
   </div>
   Total: {cartTotal(props.cartItems).toFixed(2)}
   </div>
   <div className="cart-items">
   
    </div>
  </div>
  );
}
function msp(state){
return {
	cartItems: state.cartItems
}
}
export default connect(msp)(CartOverview);