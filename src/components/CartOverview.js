import React from "react";
import { connect } from 'react-redux';

const CartOverview = (props)=> {
	return (
	<div className="cart-overview">
	
  <div className="cart-display">SHOPPING CART
   {props.cartItems.map(item=><div>{item.title}</div>)}
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