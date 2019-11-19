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
 	<div>
 	{console.log(props.currentUser)}
 	{props.reviewActive ? <ReviewEdit user={props.currentUser}/> : props.currentUser.reviews.map(
 		review=><React.Fragment key={review.id}>
 		
 		<div style={{display:"flex"}}>
 		<Image size='tiny' src={review.product.image}/>
 		<h1>{review.product.title}</h1>
 		</div>
 		<h2>{review.title}</h2>
 		<p>{review.content}</p>
 		<Button onClick={()=>toggleReview(props.reviewActivate, 
 			review, 
 			props.reviewFormControl)}>Edit Review</Button>
 		<hr/>
 		</React.Fragment>)}
 	
 	</div>
		)
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