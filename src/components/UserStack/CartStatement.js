import React, { useState } from "react";
import { connect } from "react-redux";
import checkOutOrder from "../services/checkoutOrder";

const cartTotal = (cartItems) => {
  let total = 0
  total = cartItems.reduce((total, item)=>(total +=parseFloat(item.itemPrice)),0 ).toFixed(2);
  return total;
};

const removeFromCart = (props, item) => {
  props.removeItemFromCart(item);
};

const submitCheckOut = (order, userId) => {
  // console.log("send this to create an order", order, userId)
  checkOutOrder(order, userId);
};
const CartStatement = (props) => {
  return (
    <div className="default-comp">
      <div className="cart-display">
        <h3>Order Statement</h3>
        <br />
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="item" key={item.cartIndex}>
              {item.itemTitle} : ${parseFloat(item.itemPrice).toFixed(2)}
              <button onClick={() => removeFromCart(props, item.cartIndex)}>
                remove
              </button>
            </div>
          ))}
        </div>
        Total: ${cartTotal(props.cartItems)}
        <div
          className="cart-checkout"
          onClick={() => submitCheckOut(props.cartItems, props.user)}
        >
          Checkout
        </div>
        <div className="cart-checkout">Save for later</div>
        {/**When the checkout button is pressed do something!!**/}
      </div>
    </div>
  );
};

function mdp(dispatch) {
  return {
    removeItemFromCart: (action) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: action });
    },
    closeCart: (action) => {
      dispatch({ type: "TOGGLE_CART_OVERVIEW", payload: action });
    },
  };
}
function msp(state) {
  return {
    cartItems: state.cartItems,
    user: state.userData,
  };
}
export default connect(msp, mdp)(CartStatement);
