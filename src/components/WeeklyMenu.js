import React from "react";
import Card from './Card'

const WeeklyMenu = (props) => {
	let categories = props.productData || []
	return (
	
    <div className="weekly-menu">
    <div className="banner">{props.banner}</div>
    <div className="display-window">
    {categories.filter(el=> el.in_menu === true).map(el=> <Card key={el.id} product={el}/>)}
    </div></div>

	)}

export default WeeklyMenu;