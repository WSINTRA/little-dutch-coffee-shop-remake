import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {fadeInRight} from 'react-animations';

import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 2.8s ${keyframes`${fadeInRight}`} 1`;
const Price=(DataPrice)=>{
	return parseFloat(DataPrice).toFixed( 2 )
}
const stars = 4
const Card =(props)=> {
	return (
		<Bounce>
	<div className="card-details">
	<img src={props.product.image}/>
	<h1>{props.product.title}</h1>
	<h3>{props.product.breed}</h3>
	<h2>
	<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={stars}
        /></h2>
	<p>{props.product.description}</p>

	<div className="buy-button">
	<div className="buy-button__details">BUY NOW<br/><h3>${Price(props.product.price)}</h3></div>
	</div>
	</div>
	 </Bounce>
	)
}

export default Card;