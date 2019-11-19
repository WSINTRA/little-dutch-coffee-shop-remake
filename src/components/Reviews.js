import React from 'react'
import { connect } from 'react-redux'
import { Button, Image } from 'semantic-ui-react';
import ReviewEdit from './ReviewEdit'
const toggleReview=(toggleSwitch, review)=>{
toggleSwitch()

}

const Reviews=(props)=>{
	return (
 	<div>{props.reviewActive ? <ReviewEdit/> : props.currentUser.reviews.map(
 		review=><React.Fragment key={review.id}>
 		
 		<div style={{display:"flex"}}>
 		<Image size='tiny' src={review.product.image}/>
 		<h1>{review.product.title}</h1>
 		</div>
 		<h2>{review.title}</h2>
 		<p>{review.content}</p>
 		<Button onClick={()=>toggleReview(props.reviewActivate, review)}>Edit Review</Button>
 		<hr/>
 		</React.Fragment>)}
 	
 	</div>
		)
}

function mdp(dispatch){
	return {
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