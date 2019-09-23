import React from "react";
import { connect } from 'react-redux'


const displayOption=(option)=>{
	switch(option){
		case "Sales stats":
		return <div>SALES STAT TEST</div>;
		case "Orders":
		return <div>ORDERS TEST</div>;
		case "Customers":
		return <div>CUSTOMERS TEST</div>;
		case "Employees":
		return <div>EMPLOYEES TEST</div>;
		case "Products":
		return <div>PRODUCTS TEST</div>;
		default:
		return <div>DEFAULT TEST</div>;;

	}
}


const Account = (props) => {
	
	return (
	
    <div className="account">
    <div className="banner">{props.banner}

    </div>
    <div className="account__content">
    <div className="account__content_grid_items"> 

    <div className="account__content_grid_items_selection-box"> 
    <div className="option_sales" onClick={(e)=>props.activeOptionSelect(e.target.innerText)}>Sales stats<hr/></div>
    <div className="option_orders" onClick={(e)=>props.activeOptionSelect(e.target.innerText)}>Orders<hr/></div>
    <div className="option_customers" onClick={(e)=>props.activeOptionSelect(e.target.innerText)}>Customers<hr/></div>
    <div className="option_employee" onClick={(e)=>props.activeOptionSelect(e.target.innerText)}>Employees<hr/></div>
    <div className="option_products"onClick={(e)=>props.activeOptionSelect(e.target.innerText)}>Products<hr/></div>
    </div>
    <div className="active-option">{displayOption(props.activeOption)}</div>
    </div>
    
    </div>
    </div>

	)
}

function mdp(dispatch){
	return {
		activeOptionSelect: (action)=> {
			dispatch({type:"SOME_OPTION", payload: action})
		}
	}
}
function msp(state){
	return {
		activeOption: state.activeOption
	}
}

export default connect(msp,mdp)(Account);