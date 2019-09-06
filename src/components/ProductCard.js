import React from "react";
import Card from './Card'
import {fadeInRight} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 2.8s ${keyframes`${fadeInRight}`} 1`;
const ProductCard = (props) => {
	
	return (
	<Bounce>
    <div className="product-card">
    <div className="product-card__title">
    {props.cat.category_name}
    </div>

    {props.cat.products.slice(0,4).map(//Currently only using first 4 items of the array
    	//will fix this later so I can have a button to scroll through
    	(product,index)=> <div className={`product-card__card_${index+1}`}>
    	<Card product={product}/></div>)}
   
    </div>
     </Bounce>

	)}

export default ProductCard;