import React from "react";
import ProductCard from './ProductCard'

const WeeklyMenu = (props) => {
	let categories = props.categories || []
	return (
	
    <div className="weekly-menu">
    <div className="banner">{props.banner}</div>
    
    </div>

	)}

export default WeeklyMenu;