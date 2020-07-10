import React from "react";
import Card from '../Card'
import {fadeInRight} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 0.8s ${keyframes`${fadeInRight}`} 1`;
const ProductCard = (props) => {
	
	return (
	<Bounce>
    <div className="product-card">
    <div className="product-card__title">
    
    </div>
    
    	 <div>
    	<Card key={props.product.id} product={props.product}/></div>
   
    </div>
     </Bounce>

	)}

export default ProductCard;