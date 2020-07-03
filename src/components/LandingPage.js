import React from "react";
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

const business_header = "The Little Dutch Coffee Shop"
const business_sub_header = "Online high grade dispensary built with the official secrets act"
const LandingPage = ()=> {
	return(
			<LoginForm/>
	)
}



function msp(state){
	return{
		menuOpen: state.menuOpen
	}
}

export default connect(msp)(LandingPage);


// import React from "react";
// import styled, {keyframes} from 'styled-components';
// import {fadeIn} from 'react-animations';
// import BackDrop from './BackDrop';
// import MenuHeader from './MenuHeader';
// import Header from './Header';
// import LandingBox from './LandingBox';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
// import { connect } from 'react-redux';

// const FadeIn = styled.div`animation: 1.8s ${keyframes`${fadeIn}`} 1`;

// const LandingPage = (props) => (

//  <div> <FadeIn>
//  {props.menuOpen ? <MenuHeader/>: 
// 	<Header menuButton={props.openCloseMenu}/>} 
//     <BackDrop/><LandingBox/>
//     <LoginForm/><RegisterForm/>
// </FadeIn>
// </div>
// );
// function msp(state){
// 	return{
// 		menuOpen: state.menuOpen
// 	}
// }

// export default connect(msp)(LandingPage);
