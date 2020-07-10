import React from "react";
import { connect } from 'react-redux'
const UserPage = (props)=> {
	return (
		<>
		<div style={{'textAlign': 'center', 'padding':'3rem'}}>Welcome {props.userData.username} <br/>the little dutch coffee shop</div>
		</>
	)
}

function msp(state){
	return {
		userData: state.userData,
	}
}
export default connect(msp)(UserPage);