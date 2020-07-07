// import React from "react";
import React, { useLayoutEffect } from 'react'
import StarRatingComponent from "react-star-rating-component";
import submitProduct from "./services/submitProduct";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { useRouteMatch } from "react-router-dom";

const Bounce = styled.div`
  animation: 0.5s ${keyframes`${fadeIn}`} 1;
`;

const ControlledInput = (props, input) => {
  const value = input.target.value;
  const label = input.target.name;
  const payload = {};
  payload[label] = value;
  props.productFormControl(payload);
};

const updateProducts = (props,standAlone) => {
  if(standAlone){
    props.clearProductID()
  }
  submitProduct(
    props.removeOldProductFromStore,
    props.productForm,
    props.submitProductForm
  );
};

const StarClick = (props, nextValue, prevValue, name) => {
  props.starClickControl(nextValue);
};

const CheckboxClick = (props) => {
  props.weeklyMenuBoolControl();
};

const ProductForm = (props) => {
  let match = useRouteMatch();
  let standAloneComp = match.path === '/account/AddNewProduct'
  useLayoutEffect(() => {
    if(standAloneComp){props.clearAllFormFields()}
}, [])
  return (
    <Bounce>
      <div className="product-form">
        {standAloneComp ? <h2>Add New Product</h2>  : 
        <a className="close-modal" onClick={() => props.setModal(false)}>
          <FontAwesomeIcon size="3x" icon={faWindowClose} />
        </a>}
        
        <label>Title</label>
        <input
          onChange={(e) => ControlledInput(props, e)}
          name="productTitle"
          value={props.productForm.productTitle}
          type="text"
        />
        <label>Breed</label>
        <input
          onChange={(e) => ControlledInput(props, e)}
          name="breed"
          value={props.productForm.breed}
          type="text"
        />

        <label>Description</label>
        <textarea
          onChange={(e) => ControlledInput(props, e)}
          name="description"
          value={props.productForm.description}
          type="text"
        />
        <label>Price USD/$</label>
        <input
          onChange={(e) => ControlledInput(props, e)}
          name="price"
          min="0.00"
          max="100000.00"
          step="0.01"
          value={props.productForm.price}
          type="number"
        />

        <label>Image URL</label>
        <input
          onChange={(e) => ControlledInput(props, e)}
          name="imageURL"
          value={props.productForm.imageURL}
          type="text"
        />
        <label>Rating</label>
        <div className="star">
          <StarRatingComponent
            name="prodRating"
            starCount={5}
            value={props.productForm.starRate}
            onStarClick={StarClick.bind(this, props)}
          />
        </div>
        <label>
          Add to Weekly Menu? :
          <input
            name="weeklyMenuBool"
            checked={props.productForm.checkbox}
            onChange={() => CheckboxClick(props)}
            type="checkbox"
          />
        </label>
        <div className="clear-button" onClick={() => console.log("Clear form fields")}>
        <a onClick={()=>props.clearAllFormFields()}style={{cursor: 'pointer'}}>clear all fields</a>
        </div>
        <div className="submit-button" onClick={() => updateProducts(props,standAloneComp)}>
        {standAloneComp ? "Submit" : "Edit"}
        </div>
       
      </div>
    </Bounce>
  );
};

function msp(state) {
  return {
    productForm: state.productForm,
  };
}
function mdp(dispatch) {
  return {
    clearAllFormFields: (object) => {
      dispatch({ type: "CLEAR_ALL_FIELDS", payload: object });
    },
    removeOldProductFromStore: (object) => {
      dispatch({ type: "REMOVE_BY_ID", payload: object });
    },
    clearProductID: (object) => {
      dispatch({ type: "CLEAR_PRODUCT_ID", payload: object });
    },
    submitProductForm: (object) => {
      dispatch({ type: "SUBMIT_PRODUCT_FORM", payload: object });
    },
    weeklyMenuBoolControl: (object) => {
      dispatch({ type: "WEEKLY_CHECKBOX", payload: object });
    },
    starClickControl: (object) => {
      dispatch({ type: "STAR_RATE", payload: object });
    },
    productFormControl: (object) => {
      dispatch({ type: "PRODUCT_FORM_CONTROL", payload: object });
    },
  };
}
export default connect(msp, mdp)(ProductForm);
