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
	<>
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
        
      </Table.Body>
      </Table>

        </>
        )
}


// function mdp(dispatch){
//   return {
//     reviewActivate: (action)=> {
//       dispatch({type:"REVIEW_ACTIVE", payload: action})
//     },
//     activeOptionSelect: (action)=> {
//       dispatch({type:"SOME_OPTION", payload: action})
//     },
//     reviewFormControl: (object)=> {
//       dispatch({type:"REVIEW_FORM_CONTROL", payload: object})
//     },
//   }
// }

// function msp(state){
//   return {
//     currentUser: state.userData,
//     reviewActive: state.reviewActive
//   }

// }

export default YourOrders;
// export default connect(msp, mdp)(YourOrders);