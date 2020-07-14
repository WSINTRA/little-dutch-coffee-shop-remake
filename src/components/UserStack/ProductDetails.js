import React from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { buttonFeedback } from '../services/buttonFeedback';

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


const BuyButton = (addProductToCart, props) => {
  return (
    <div className="buy-btn" 
    style={{boxShadow: props.buttonPress}} 
    onMouseDown={(e)=>buttonFeedback(e, props.buttonFeedback)} 
    onMouseUp={(e)=>buttonFeedback(e, props.buttonFeedback)} 
    onClick={() => addProductToCart(props)}>
      ADD TO CART
    </div>
  );
};

const cartSuccess = (props) => {
  return (
    <Bounce>
      <div style={{ paddingTop: "2rem" }} className="cart-success">
        <Link to="/cart">
          <p style={{ color: "#237653" }}>
            Succesfully added {props.cartItemQuantity}x<br/>
            <b>{props.product.title}</b> to your shopping cart
          </p>
        </Link>
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
        <div className="review">{Reviews(props)}</div>
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
    buttonFeedback: (action) => {
      dispatch({ type: "BUTTON_FEEDBACK", payload: action});
    }
  };
}

function msp(state) {
  return {
    cartSuccessSwitch: state.cartSuccess,
    cartItemQuantity: state.cartItemQuantity,
    buttonPress: state.buttonPress,
  };
}

export default connect(msp, mdp)(ProductDetails);
