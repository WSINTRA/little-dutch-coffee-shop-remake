import React, { useLayoutEffect, useState } from 'react'
import StarRatingComponent from "react-star-rating-component";
import submitProduct from "../services/submitProduct";

import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { buttonFeedback } from '../services/buttonFeedback'

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
  if(props.productForm.productTitle.length > 2){
  submitProduct(
    props.removeOldProductFromStore,
    props.productForm,
    props.submitProductForm
  );
}
else {
  alert("Product must atleast have a title")
}
  
  props.clearAllFormFields()
};

const StarClick = (props, nextValue, prevValue, name) => {
  props.starClickControl(nextValue);
};

const CheckboxClick = (props) => {
  props.weeklyMenuBoolControl();
};

const ProductForm = (props) => {
  let match = useRouteMatch();

  const [standAloneComp, setStandAloneComp] = useState(match.path === '/account/AddNewProduct')
  //This only triggers is the comp is being used as standalone, it fires the hook just before DOM render
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
        {!!props.productForm.imageURL ? 
        <img className="product-image" style={{ width: "250px" }} alt="prod-image" src={props.productForm.imageURL} /> 
        : null}
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
        {standAloneComp ?
        <div className="clear-button">
        <a onClick={()=>props.clearAllFormFields()}style={{cursor: 'pointer'}}>clear all fields</a>
        </div> : null }
        <div className="submit-button" 
        style={{boxShadow: props.buttonPress}}
        onMouseDown={(e)=>buttonFeedback(e, props.buttonFeedback)} 
        onMouseUp={(e)=>buttonFeedback(e, props.buttonFeedback)} 
        onClick={() => updateProducts(props,standAloneComp)}>
        {standAloneComp ? "Submit" : "Edit"}
        </div>
       
      </div>
    </Bounce>
  );
};
//Need some kind of feedback if the submission was all good, lets investigate the submission process
function msp(state) {
  return {
    productForm: state.ProductReducer.productForm,
    buttonPress: state.reducer.buttonPress
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
    buttonFeedback: (action) => {
      dispatch({ type: "BUTTON_FEEDBACK", payload: action});
    }
  };
}
export default connect(msp, mdp)(ProductForm);
