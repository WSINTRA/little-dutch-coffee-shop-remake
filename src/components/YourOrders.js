import React from "react";
import { Button, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';


const orderDate=(date)=>{
  let newDate = new Date(date)
  return newDate.toDateString()
}

const checkProductHasReview=(reviews, product)=>{
  let match = reviews.filter(review=> review.product_id === product)
  if(match.length > 0 ){
    return true
  }
  return false
}
const toggleReview=(toggleSwitch, changeView,control,product)=>{
toggleSwitch()
changeView("Reviews")

const title = {}
title["reviewTitle"] = product.title
control(title)

const prodID = {}
prodID["productID"] = product.id
control(prodID)

}

const YourOrders=(props)=>{
	
	return (
	<React.Fragment>
  {props.currentUser.orders.length > 0 ? 
    <React.Fragment>
  <h3>Purchase History</h3>
      <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row >
          <Table.HeaderCell>Order No.</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
           <Table.HeaderCell>Purchase Data</Table.HeaderCell>
           <Table.HeaderCell>Review Status</Table.HeaderCell>
       </Table.Row>

      </Table.Header>

      <Table.Body>
       {props.currentUser.orders.map(order=> <React.Fragment key={order.id} >
        
        {order.products.map(product=>
          <React.Fragment key={product.id}>
          <Table.Row><Table.Cell>
       {order.id}
        </Table.Cell><Table.Cell>{product.title}</Table.Cell>
          <Table.Cell>{orderDate(order.created_at)}</Table.Cell>
          <Table.Cell>
         {checkProductHasReview(props.currentUser.reviews, product.id) ?  
           "Completed" : 
           <Button 
           onClick={()=>toggleReview(props.reviewActivate, 
             props.activeOptionSelect, 
             props.reviewFormControl,
             product )}>Add Review</Button> }
          </Table.Cell></Table.Row></React.Fragment>
        )}
        
        
       
         
      
        </React.Fragment>)
   } 
   
   
   
   </Table.Body>
    
</Table></React.Fragment> : <p>You currently have no previous orders</p>}
	


        </React.Fragment>
        )
}


function mdp(dispatch){
  return {
    reviewActivate: (action)=> {
      dispatch({type:"REVIEW_ACTIVE", payload: action})
    },
    activeOptionSelect: (action)=> {
      dispatch({type:"SOME_OPTION", payload: action})
    },
    reviewFormControl: (object)=> {
      dispatch({type:"REVIEW_FORM_CONTROL", payload: object})
    },
  }
}

function msp(state){
  return {
    currentUser: state.userData,
    reviewActive: state.reviewActive
  }

}

export default connect(msp, mdp)(YourOrders);