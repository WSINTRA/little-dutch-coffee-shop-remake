import React from "react";
import Card from "./Card";
import {connect } from 'react-redux';

const passProductForReview = (product, props) => {
  console.log(product);
  //Pass this products details into ReviewEdit
  props.editSelected(product);
};

const Reviews = (props) => {
  return (
      <div className="products-list">
		  {console.log(props)}
        {props.currentUser.product_for_review.map((product) => (
          <div key={product.id} onClick={() => passProductForReview(product, props)}>
            <Card backSwitch={null} {...product} />
          </div>
        ))}
      </div>
  );
};

function mdp(dispatch) {
	return {
	  editSelected: (action) => {
		dispatch({ type: "EDIT_REVIEW", payload: action });
	  }
	};
  }
  function msp(state) {
	return {
	  currentUser: state.userData,
	};
  }
export default connect(msp, mdp)(Reviews);
