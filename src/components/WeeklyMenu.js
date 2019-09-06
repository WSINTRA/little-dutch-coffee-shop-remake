import React from "react";

const WeeklyMenu = (props) => {
	let categories = props.categories || []
	return (
	
    <div className="weekly-menu">
    <div className="banner">{props.banner}</div>
    <div className="weekly-menu__cat">
        {categories.map(cat=> <ul><li>{cat.category_name}</li></ul>)}</div>
    </div>

	)}

export default WeeklyMenu;