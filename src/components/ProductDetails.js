import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
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
    <div className="buy-button" onClick={() => addProductToCart(props)}>
      <div className="buy-button__details">
        ADD TO CART
        <br />
        <h3>${Price(props.product.price)}</h3>
      </div>
    </div>
  );
};

const cartSuccess = (props) => {
  return (
    <Bounce>
      <div className="cart-success">
        <h4>{props.product.title}</h4>
        <p>Succesfully added to your shopping cart</p>
        <br />
        <div className="cart-button" onClick={() => props.closeSuccess()}>
          CLOSE
        </div>
      </div>
    </Bounce>
  );
};
const ProductDetails = (props) => {
  return (
    <div>
      <div className="product-responsive-view">
        <div className="review-responsive">
          <h2>Reviews</h2>
          {Reviews(props)}
        </div>
        <div className="button-responsive">
          {BuyButton(addProductToCart, props)}
        </div>
        {props.cartSuccessSwitch ? cartSuccess(props) : null}
      </div>
      <div className="product-details">
        {props.cartSuccessSwitch ? cartSuccess(props) : null}
        <div className="left">
          <div className="left-image">
            <img size="small" src={props.product.image} />
          </div>
          <div className="left-title">
            <h2>{props.product.title}</h2>
          </div>
          <div className="left-breed">
            <h4>{props.product.breed}</h4>
          </div>
          <div className="left-details">
            <p>{props.product.description}</p>
          </div>

          {BuyButton(addProductToCart, props)}
        </div>
        <div className="right">
          <div className="right-title">
            <h2>Reviews</h2>
          </div>
          <div className="right-review">{Reviews(props)}</div>
        </div>
      </div>
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
  };
}

function msp(state) {
  return {
    cartSuccessSwitch: state.cartSuccess,
  };
}

export default connect(msp, mdp)(ProductDetails);
