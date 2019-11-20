import React from 'react'
import { connect } from 'react-redux'
import { Button, Image } from 'semantic-ui-react';
import ReviewEdit from './ReviewEdit'
const toggleReview=(toggleSwitch, review, control)=>{
toggleSwitch()
const title = {}
const content = {}
const id = {}
const prodID = {}
title["reviewTitle"] = review.title
control(title)
content["reviewContent"] = review.content
control(content)
id["reviewID"] = review.id
control(id)
prodID["productID"] = review.product.id
control(prodID)

}

const Reviews=(props)=>{
	return (
 	
 	<React.Fragment>
 	{props.reviewActive ? <ReviewEdit toggleReview={props.reviewActivate} user={props.currentUser}/> : 
 		<div className="reviews">
	 	{props.currentUser.reviews.map(
	 		review=><React.Fragment key={review.id}>
	 		<div className="review">
	 		<div style={{display:"flex"}}>
	 		<Image size='tiny' src={review.product.image}/>
	 		<h1>{review.product.title}</h1>
	 		</div>
	 		<h2>{review.title}</h2>
	 		<p>{review.content}</p>
	 		<Button onClick={()=>toggleReview(props.reviewActivate, 
	 			review, 
	 			props.reviewFormControl)}>Edit Review</Button>
	 		</div>
	 		</React.Fragment>) }
 		</div>
	}
	</React.Fragment>)
}

function mdp(dispatch){
	return {
		reviewFormControl: (object)=> {
      dispatch({type:"REVIEW_FORM_CONTROL", payload: object})
    },
		reviewActivate: (action)=> {
			dispatch({type:"REVIEW_ACTIVE", payload: action})
		}
	}
}

function msp(state){
	return {
		currentUser: state.userData,
		reviewActive: state.reviewActive
	}

}
export default connect(msp,mdp)(Reviews);