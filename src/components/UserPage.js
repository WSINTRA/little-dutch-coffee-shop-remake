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
		<div>Welcome to the little dutch coffee shop</div>
		</>
	
	)
}

// const displayLink=(props)=>{
// window.scrollTo(0, 0);
// 	switch(props.activeLink){
// 		//Add more statements to this for links to work as App grows
// 		case "Your Account":
// 		return <Account banner={props.activeLink}/>;
// 		case "Weekly Menu":
// 		return <WeeklyMenu productData={props.productData}
// 		banner={props.activeLink}
// 		/>
// 		default:
// 		return <Account banner={props.activeLink}/>;
// 	}
// }


// const UserPage = (props) => (

//   <div>
  
//    {props.menuOpen ? <MenuHeader 
//   	activeLinkSelect={props.activeLinkSelect}
//   	logOut={props.logOut}/>: 
// 	<Header 
// 	openCloseCart={props.openCloseCart}
// 	cartOpen={props.cartOpen}	
// 	menuButton={props.openCloseMenu}/>} 
//    <BackDrop/>
//    <Bounce>
//    {displayLink(props)}
//    </Bounce>
   
//   </div>
// );

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


//Build a header bar component, build a nav bar component, 
// BUild links and routes for the different pages based on the designs
