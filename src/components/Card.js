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
	console.log(props)
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

		//set the strings to a set length, add a more.. tage to the end with an onlick
	// <Bounce>
	// <div onClick={()=>props.switch(props.product)}
	// 	className="card-details">
	// <img alt="product" src={props.product.image}/>
	// <h1>{props.product.title}</h1><br/>
	// <h3>{props.product.breed}</h3>
	// <h2>
	// <StarRatingComponent 
    //       name="rate1" 
    //       starCount={5}
    //       value={stars}
    //     /></h2>
	// <p>{props.product.description}</p>
	
	// <div className="buy-button">
	// <div className="buy-button__details">BUY NOW<br/><h3>${Price(props.product.price)}</h3></div>
	// </div>
	// </div>
	//  </Bounce>
	)
}

export default Card;