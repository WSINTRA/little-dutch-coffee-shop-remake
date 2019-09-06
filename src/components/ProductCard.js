import React from "react";
import Card from './Card'
const ProductCard = (props) => {
	
	return (
	
    <div className="product-card">
    {console.log(props, "product card")}
    <div className="product-card__title">
    {props.cat.category_name}
    </div>
    <div className="product-card__card_1"><Card /></div>
    <div className="product-card__card_2"><Card/></div>
    <div className="product-card__card_3"><Card/></div>
    <div className="product-card__card_4"><Card/></div>
    </div>

	)}

export default ProductCard;