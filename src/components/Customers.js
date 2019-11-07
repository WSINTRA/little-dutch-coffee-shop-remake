import React from "react";
import { connect } from "react-redux";
import fetchCustomers from './customerFetch'

const Customers=(props)=>{
	return (
	<div>{fetchCustomers(props.allCustomers)}
	{props.customersData.map(customer=> <div>{customer.username}</div>)}</div>
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