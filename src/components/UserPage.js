import React from "react";
import { connect } from 'react-redux'
import {fadeIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import HeaderComp from "./HeaderComp";
import MenuComp from "./MenuComp";
import WeeklyMenu from "./WeeklyMenu";
import OurStory from "./OurStory";
import Statement from "./Statement";
import Account from "./Account";


const Bounce = styled.div`animation: 1.8s ${keyframes`${fadeIn}`} 1`;
const UserPage = (props) => (

  <div>
    <HeaderComp />
    <MenuComp 
    selectMenuItem={props.selectMenuItem}
    />
    {console.log(props.categories)}
    <Bounce>
	    {props.menuItem === 'Weekly Menu' ? 
	    <WeeklyMenu 
	    banner={props.menuItem}
	    categories={props.categories}/> : null}
	    {props.menuItem === 'Our Story' ? 
	    <OurStory
	    banner={props.menuItem}
	    categories={props.categories}/> : null}
	    {props.menuItem === 'Statement' ? 
	    <Statement
	    banner={props.menuItem}
	    categories={props.categories}/> : null}
	    {props.menuItem === 'Account' ? 
	    <Account
	    banner={props.menuItem}
	    categories={props.categories}/> : null}
	</Bounce>
  </div>
);

function msp(state){
	return {categories: state.categories}
}
export default connect(msp)(UserPage);


//Build a header bar component, build a nav bar component, 
// BUild links and routes for the different pages based on the designs
