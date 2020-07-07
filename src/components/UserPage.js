import React from "react";
import { connect } from 'react-redux'
const UserPage = (props)=> {
	return (
		<>
		<div style={{'textAlign': 'center', 'padding':'3rem'}}>Welcome {props.userData.username} <br/>the little dutch coffee shop</div>
		</>
	)
}

function mdp(dispatch){
	return {
		activeLinkSelect: (action)=> {
			dispatch({type:"SOME_LINK", payload: action})
		}
	}
}
function msp(state){
	return {
		userData: state.userData,
		productData: state.productData,
		activeLink: state.activeLink,
		menuOpen: state.menuOpen,
	}
}
export default connect(msp,mdp)(UserPage);