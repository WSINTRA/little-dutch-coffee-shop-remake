import React from "react";
import { connect } from 'react-redux'
import {slideInRight} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import Header from './Header'
import MenuHeader from './MenuHeader'
import BackDrop from './BackDrop'
import Account from './Account'

const Bounce = styled.div`animation: 1.8s ${keyframes`${slideInRight}`} 1`;
const UserPage = (props) => (

  <div>
  {props.menuOpen ? <MenuHeader menuButton={props.openCloseMenu}/>: 
	<Header menuButton={props.openCloseMenu}/>} 
   <BackDrop/>
   <Account banner={"Account"}/>
   
  </div>
);

function msp(state){
	return {categories: state.categories}
}
export default connect(msp)(UserPage);


//Build a header bar component, build a nav bar component, 
// BUild links and routes for the different pages based on the designs
