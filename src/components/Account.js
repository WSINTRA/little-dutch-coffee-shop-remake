import React from "react";
import { connect } from 'react-redux'
import AdminProducts from './AdminProducts'
import Customers from './Customers'
import YourOrders from './YourOrders'
import Reviews from './Reviews'

const displayOption=(option,props)=>{
	switch(option){
    case "Reviews":
    return <div style={{marginLeft:"9rem",marginTop:"5rem"}}>
    <Reviews/></div>
    case "Your Orders":
    return <div style={{marginLeft:"9rem",marginTop:"5rem"}}>
    <YourOrders/></div>;
		case "Sales stats":
		return <div>SALES STAT TEST</div>;
		case "Orders":
		return <div>ORDERS TEST</div>;
		case "Customers":
		return <Customers/>;
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
    {props.banner} : {props.currentUser.username === undefined ? props.currentUser.username : null}
    </div>

   {props.currentUser.staff ?   <div>
   	<div className="responsive_view">{/** THIS SECTION IS FOR MOBILE VIEW ADMIN**/}
   	<div className="option_sales" onClick={(e)=>clickActionForOptions(e,props)}>Sales stats<hr/>
   	{props.activeOption === "Sales stats" ? <div>SOME THING HERE</div>:null}</div>
   <div className="option_orders" onClick={(e)=>clickActionForOptions(e,props)}>Orders<hr/>
   {props.activeOption === "Orders" ? <div>SOME THING HERE</div>:null}</div>
   <div className="option_customers" onClick={(e)=>clickActionForOptions(e,props)}>Customers<hr/>
   {props.activeOption === "Customers" ? <div><Customers/></div>:null}</div>
   <div className="option_employee" onClick={(e)=>clickActionForOptions(e,props)}>Employees<hr/>
   {props.activeOption === "Employees"? <div>SOME THING HERE</div>:null}</div>
   <div className="option_products"onClick={(e)=>clickActionForOptions(e,props)}>Products<hr/>
   {props.activeOption === "Products" ? <div>SOME THING HERE</div>:null}</div>

   </div>
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
    </div>
   </div> :
   <div>
   <div className="responsive_view">{/** THIS SECTION IS FOR MOBILE VIEW USERS**/}
     <div className="option_userOrders" onClick={(e)=>clickActionForOptions(e,props)}>User Orders<hr/>
     {props.activeOption === "User Orders" ? <div>User orders</div>:null}</div>
   <div className="option_reviews" onClick={(e)=>clickActionForOptions(e,props)}>Reviews<hr/>
   {props.activeOption === "Reviews" ? <div>User reviews</div>:null}</div>
   <div className="option_savedCart" onClick={(e)=>clickActionForOptions(e,props)}>Saved cart<hr/>
   {props.activeOption === "Saved Cart" ? <div>Saved cart</div>:null}</div>
   <div className="option_details" onClick={(e)=>clickActionForOptions(e,props)}>Details<hr/>
   {props.activeOption === "Details"? <div>Details here</div>:null}</div>
   <div className="option_settings"onClick={(e)=>clickActionForOptions(e,props)}>Settings<hr/>
   {props.activeOption === "Settings" ? <div>SOME THING HERE</div>:null}</div>

   </div>
    <div className="account__content">
   <div className="account__content_grid_items"> 

   <div className="account__content_grid_items_selection-box"> 
   <div className="option_userOrders" onClick={(e)=>clickActionForOptions(e,props)}>Your Orders<hr/></div>
   <div className="option_reviews" onClick={(e)=>clickActionForOptions(e,props)}>Reviews<hr/></div>
   <div className="option_savedCart" onClick={(e)=>clickActionForOptions(e,props)}>Saved Cart<hr/></div>
   <div className="option_details" onClick={(e)=>clickActionForOptions(e,props)}>Details<hr/></div>
   <div className="option_settings"onClick={(e)=>clickActionForOptions(e,props)}>Settings<hr/></div>
   </div>
   <div className="active-option">{displayOption(props.activeOption, props)}</div>
   </div>
    </div>
   </div>
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