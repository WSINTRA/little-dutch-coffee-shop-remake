import React from 'react'
import { connect } from 'react-redux'
import { Button, Image } from 'semantic-ui-react';

const Reviews=(props)=>{
	return (
 	<div>
 	{props.currentUser.reviews.map(review=><React.Fragment>
 		
 		<div style={{display:"flex"}}><Image size='tiny' src={review.product.image}/><h1>{review.product.title}</h1></div>
 		<h2>{review.title}</h2>
 		<p>{review.content}</p>
 		<Button>Edit Review</Button>
 		<hr/>
 		</React.Fragment>)}
 	</div>
		)
}

function msp(state){
	return {
		currentUser: state.userData
	}

}
export default connect(msp)(Reviews);