import React from "react";
import {Table } from 'semantic-ui-react';

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
export default YourOrders;
