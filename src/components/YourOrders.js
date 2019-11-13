import React from "react";
import { Button, Header, Image, Table } from 'semantic-ui-react';



const orderDate=(date)=>{
  let newDate = new Date(date)
  return newDate.toDateString()
}

const YourOrders=(props)=>{
	
	return (
	<React.Fragment>
	<h3>Purchase History</h3>
     
      <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row >
      		<Table.HeaderCell>Order No.</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
           <Table.HeaderCell>Purchase Data</Table.HeaderCell>
       </Table.Row>

      </Table.Header>

      <Table.Body>
       {props.currentUser.orders.map(order=> <React.Fragment>
        
        {order.products.map(product=>
          <React.Fragment><Table.Row >
         <Table.Cell>
       {order.id}
        </Table.Cell><Table.Cell>{product.title}</Table.Cell>
          <Table.Cell>{orderDate(order.created_at)}</Table.Cell> </Table.Row></React.Fragment>
        )}
        
        
       
         
      
        </React.Fragment>)
   } 
   
   
   
   </Table.Body>
    
</Table>


        </React.Fragment>
        )
}

export default YourOrders;