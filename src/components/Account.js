import React from "react";
import { connect } from 'react-redux'
import AdminProducts from './AdminProducts'

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
		return <AdminProducts/>;
		default:
		return <div>default</div>;;

	}
}

const clickActionForOptions=(e,props)=>{
	props.activeOptionSelect(e.target.innerText)
}

const Account = (props) => {
	
	return (

    <div className="account">

    <div className="banner">
    {props.banner}
    </div>
   {props.currentUser.staff ?   
    <div className="account__content">
   <div className="account__content_grid_items"> 

   <div className="account__content_grid_items_selection-box"> 
   <div className="option_sales" onClick={(e)=>clickActionForOptions(e,props)}>Sales stats<hr/></div>
   <div className="option_orders" onClick={(e)=>clickActionForOptions(e,props)}>Orders<hr/></div>
   <div className="option_customers" onClick={(e)=>clickActionForOptions(e,props)}>Customers<hr/></div>
   <div className="option_employee" onClick={(e)=>clickActionForOptions(e,props)}>Employees<hr/></div>
   <div className="option_products"onClick={(e)=>clickActionForOptions(e,props)}>Products<hr/></div>
   </div>
   <div className="active-option">{displayOption(props.activeOption)}</div>
   </div>
    
   </div> :
 null 
// //Fill in how the account page should look for a normal user
}
 
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
		currentUser: state.userData,
		activeOption: state.activeOption
	}
}

export default connect(msp,mdp)(Account);