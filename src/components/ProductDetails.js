import React from "react";
import {fadeInRight} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 2.8s ${keyframes`${fadeInRight}`} 1`;
const ProductDetails = (props) => {
	
	return (

    <div className="product-details">    
    {console.log(props)}
    <div className="left">
    <div className="left-image"><img size="small"src={props.product.image}/></div>
    <div className="left-title"><h2>{props.product.title}</h2></div>
    <div className="left-breed"><h4>{props.product.breed}</h4></div>
    <div className="left-details"><p>{props.product.description}</p></div>
    
   </div>
   <div className="right">
   <div className="right-title">
   <h2>Reviews</h2>
   </div>
   <div className="right-review">
       {props.product.reviews.map(review=><div key={review.id}><h3>{review.title}</h3>
           <p>{review.content}</p></div>)}
   
   </div>
   
   </div>
    </div>
   

	)}

export default ProductDetails;


