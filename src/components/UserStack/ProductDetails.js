import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Bounce = styled.div`
  animation: 0.8s ${keyframes`${fadeIn}`} 1;
`;
const Price = (DataPrice) => {
  return parseFloat(DataPrice).toFixed(2);
};

const addProductToCart = (props) => {
  props.addToCart(props.product);
};
const Reviews = (props) => {
  return props.product.reviews.map((review) => (
    <div key={review.id}>
      <h3>{review.title}</h3>
      <p>{review.content}</p>
      <hr />
    </div>
  ));
};

const BuyButton = (addToCart, props) => {
  return (
    <div className="buy-btn" onClick={() => addProductToCart(props)}>
        ADD TO CART
    </div>
  );
};

const cartSuccess = (props) => {
  return (
    <Bounce>
      <div className="cart-success">
        <div onClick={()=>props.openCart(true)}>
        <div className="close-icon" >
              <FontAwesomeIcon size="3x" icon={faCannabis} /> 
              <FontAwesomeIcon size="3x" icon={faShoppingBasket} />
            </div> </div>
        <p>Succesfully added to your shopping cart</p>
        <br />
      </div>
    </Bounce>
  );
};
const ProductDetails = (props) => {
  return (
    <div className="product-details">
      <h1>{props.product.title}</h1>
      <div className="reviews">
      <img size="small" alt={props.product.title} src={props.product.image} />
      <p>{props.product.description}</p>
      <div className="review">
      {Reviews(props)}
      </div>
      </div>
      {props.cartSuccessSwitch ? cartSuccess(props) : null}
      <h3>${Price(props.product.price)}</h3>
      {BuyButton(addProductToCart, props)}
    </div>
  );
};
function mdp(dispatch) {
  return {
    addToCart: (action) => {
      dispatch({ type: "ADD_TO_CART", payload: action });
    },
    closeSuccess: (action) => {
      dispatch({ type: "CLOSE_SUCCESS_WINDOW", payload: action });
    },
    openCart: (action)=> {
      dispatch({ type: "TOGGLE_CART_OVERVIEW", payload: action });
    }
  };
}

function msp(state) {
  return {
    cartSuccessSwitch: state.cartSuccess,
  };
}

export default connect(msp, mdp)(ProductDetails);
