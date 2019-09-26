import React from "react";
import { connect } from 'react-redux'
import {slideInRight} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Header from './Header'
import MenuHeader from './MenuHeader'
import BackDrop from './BackDrop'
import Account from './Account'
import WeeklyMenu from './WeeklyMenu'
const Bounce = styled.div`animation: 1.8s ${keyframes`${slideInRight}`} 1`;

const displayLink=(props)=>{
	switch(props.activeLink){
		case "Your Account":
		return <Account banner={props.activeLink}/>;
		case "Weekly Menu":
		return <WeeklyMenu banner={props.activeLink}/>
		default:
		return <Account banner={props.activeLink}/>;

	}
}


const UserPage = (props) => (

  <div>
  <Bounce>
   {props.menuOpen ? <MenuHeader 
  	activeLinkSelect={props.activeLinkSelect}
  	menuButton={props.openCloseMenu}/>: 
	<Header 
	menuButton={props.openCloseMenu}/>} 
   <BackDrop/>
   
   {displayLink(props)}
   </Bounce>
   
  </div>
);

function mdp(dispatch){
	return {
		activeLinkSelect: (action)=> {
			dispatch({type:"SOME_LINK", payload: action})
		}
	}
}
function msp(state){
	return {
		categories: state.categories,
		activeLink: state.activeLink
	}
}
export default connect(msp,mdp)(UserPage);


//Build a header bar component, build a nav bar component, 
// BUild links and routes for the different pages based on the designs
