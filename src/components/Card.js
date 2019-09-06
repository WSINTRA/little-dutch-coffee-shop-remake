import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const stars = 4
const Card =(props)=> {
	return (
	<div className="card-details">
	<img src={props.product.image}/>
	<h1>{props.product.name}</h1>
	
	<h2>BREED</h2>
	<StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={stars}
        />
	<p>{props.product.description}</p>
	</div>
	)
}

export default Card;