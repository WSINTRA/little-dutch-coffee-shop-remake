import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {fadeInRight} from 'react-animations';

import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 0.8s ${keyframes`${fadeInRight}`} 1`;
const standardisePrice=(price)=>{
	return parseFloat(price).toFixed( 2 )
}
const showFullDescription=(description, trigger)=>{
	let boolSwitch = !trigger;
	let string = description;
	if(boolSwitch){
		return string.slice(0,55)
	}
	return string
}
const changeMoreToLess=(trigger)=>{
	if(trigger){
		return "...less"
	}
	return "more..."
}

const stars = 4
const Card =(props)=> {
	const [more, setMore] = useState(false);
	return (
		
		<div className="product-card">
			<Bounce><h1>{props.title}</h1></Bounce>
			<img alt="product" src={props.image}/>
			<StarRatingComponent 
				name="rate1" 
				starCount={5}
				value={stars}
				/>
			<p>{showFullDescription(props.description, more) + " "}
				<a onClick={()=>setMore(!more)}>{changeMoreToLess(more)}</a></p>
			<h3>${standardisePrice(props.price)}</h3>
		</div>
	)
}

export default Card;