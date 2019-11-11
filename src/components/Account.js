import React from "react";
import { connect } from 'react-redux'
import AdminProducts from './AdminProducts'
import Customers from './Customers'
import { Button, Header, Image, Table } from 'semantic-ui-react';

const displayOption=(option)=>{
	switch(option){
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

const orderDate=(date)=>{
  let newDate = new Date(date)
  return newDate.toDateString()
}

const Account = (props) => {
	
	return (

    <div className="account">

    <div className="banner">
    {props.banner} : {props.currentUser.username}
    </div>

   {props.currentUser.staff ?   <div>
   	<div className="responsive_view">
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
 <div>{console.log(props.currentUser)}
     <div className="responsive_view">TEST RESPONSIVE</div>
     <div className="account__content">
     <div className="account__content_grid_items" >
     <div className="active-option"><img src={props.currentUser.avatar}/>
     <div style={{height:"19rem",overflow: "scroll"}}><h3>Purchase History</h3>
     
     

       {props.currentUser.orders.map(order=> <React.Fragment>
         <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>Order No.{order.id}</Table.HeaderCell>
         <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Purchase Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
         
        
        {order.products.map(product=>
          <React.Fragment><Table.Row >
         <Table.Cell>
       
        </Table.Cell><Table.Cell>{product.title}</Table.Cell>
          <Table.Cell>{orderDate(order.created_at)}</Table.Cell> </Table.Row></React.Fragment>
        )}
        
        
       
         </Table.Body>
      </Table>
        </React.Fragment>)} 
        
      
        
      
 
  
 </div>
      </div>
     </div>
  </div></div>
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