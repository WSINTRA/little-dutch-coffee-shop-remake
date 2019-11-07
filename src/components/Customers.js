import React from "react";
import { connect } from "react-redux";
import fetchCustomers from './customerFetch'
import { Button, Header, Image, Table } from 'semantic-ui-react';

const Customers=(props)=>{
	return (
	<div>
	<Button onClick={()=>fetchCustomers(props.allCustomers)}>Show latest data</Button>
	<Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Customer</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Zip</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    
	{props.customersData.map(customer=> CustomerTable(customer) )}
	
	</Table.Body>
      </Table>

	</div>
	)
}

const CustomerTable=(customer)=>{ 
return (
      <Table.Row key={customer.id} >

        <Table.Cell>
          <Image src={customer.avatar} rounded size='mini' />
              {customer.username}
        </Table.Cell>
        <Table.Cell>{customer.email}</Table.Cell>
        <Table.Cell>{customer.staff ? "Staff" : "Customer"}</Table.Cell>
        <Table.Cell>{customer.address}</Table.Cell>
        <Table.Cell>{customer.city}</Table.Cell>
        <Table.Cell>{customer.zip}</Table.Cell>
        
      </Table.Row>
      
      )
  }

function mdp(dispatch){
return {
	allCustomers: (action)=>{
		dispatch({type:"ALL_CUSTOMERS", payload: action})
	}
 }
}
function msp(state){
	return {
		customersData: state.allCustomersData
	}
}

export default connect(msp, mdp)(Customers);