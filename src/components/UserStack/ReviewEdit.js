import React from 'react';
import {connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import submitReview from '../services/submitReview'

const ControlledInput = (props, input) => {
  const value = input.target.value
  const label = input.target.name
  const payload = {}
  payload[label] = value 
  props.reviewFormControl(payload)

}

const EditReview=(props)=>{
	return(
	
    <div className="review-edit">
      {props.editReviewForm.productTitle ? <h3>Review for : {props.editReviewForm.productTitle}</h3> : <h2>Select a product to edit</h2>}
          <div>
            <label >Review Title</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="reviewTitle"
            value={props.editReviewForm.reviewTitle}
            type="text"/>
          </div><br/>

          <div>
            <label >Content</label><br/>
            <textarea
            onChange={(e)=>ControlledInput(props, e)} 
            name="reviewContent"
            value={props.editReviewForm.reviewContent}
            type="text"/>
          </div><br/>
		<Button onClick={()=>{submitReview(
      props.editReviewForm, 
			props.user, 
			props.reviewToUserData)}}>Submit</Button>
        
    </div>


	)
}

function msp(state){
  return {
    editReviewForm: state.editReviewForm,
    user: state.userData
  };
}
function mdp(dispatch){
  return {
  	reviewToUserData: (object)=>{
  		dispatch({type:"ADD_REVIEW_DATA_TO_USER_STATE", payload: object})
  	},
    reviewFormControl: (object)=> {
      dispatch({type:"REVIEW_FORM_CONTROL", payload: object})
    },
  }
}

export default connect(msp,mdp)(EditReview);