import React from "react";
import { Button, Header, Image, Table } from 'semantic-ui-react';



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

const YourOrders=(props)=>{
	
	return (
	<React.Fragment>
	<h3>Purchase History</h3>
     {console.log(props, "inspection")}
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
          <Table.Row >
          <Table.Cell>
       {order.id}
        </Table.Cell><Table.Cell>{product.title}</Table.Cell>
          <Table.Cell>{orderDate(order.created_at)}</Table.Cell>
          <Table.Cell>
         {checkProductHasReview(props.currentUser.reviews, product.id) ?  
           <Button>Edit Review</Button> : <Button>Add Review</Button> }
          </Table.Cell> </Table.Row></React.Fragment>
        )}
        
        
       
         
      
        </React.Fragment>)
   } 
   
   
   
   </Table.Body>
    
</Table>


        </React.Fragment>
        )
}

export default YourOrders;