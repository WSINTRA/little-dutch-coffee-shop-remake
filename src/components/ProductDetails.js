import React from "react";
import {fadeInRight} from 'react-animations';
import styled, {keyframes} from 'styled-components';

const Bounce = styled.div`animation: 2.8s ${keyframes`${fadeInRight}`} 1`;
const ProductDetails = (props) => {
	
	return (
	<Bounce>
    <div className="product-details">    
    {console.log(props)}

   
    </div>
     </Bounce>

	)}

export default ProductDetails;


