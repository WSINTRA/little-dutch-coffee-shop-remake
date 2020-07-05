import React from "react";
import { connect } from 'react-redux'
// import { Router, Route } from "react-router";
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import MenuHeader from './MenuHeader'
import BackDrop from './BackDrop'
import Account from './Account'
import WeeklyMenu from './WeeklyMenu'
const Bounce = styled.div`animation: 0.8s ${keyframes`${fadeIn}`} 1`;


const UserPage = (props)=> {
	return (
		<>
		<div style={{'textAlign': 'center', 'padding':'3rem'}}>Welcome to the little dutch coffee shop</div>
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
		productData: state.productData,
		activeLink: state.activeLink,
		menuOpen: state.menuOpen,
	}
}
export default connect(msp,mdp)(UserPage);