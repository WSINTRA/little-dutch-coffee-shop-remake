import React from "react";
import ProductCard from './ProductCard'

const WeeklyMenu = (props) => {
	let categories = props.productData || []
	return (
	
    <div className="weekly-menu">
    <div className="banner">{props.banner}</div>
    <div className="display-window">
    {categories.filter(el=> el.in_menu === true).map(el=> <div>{el.title}</div>)}
    </div></div>

	)}

export default WeeklyMenu;