import React from "react";
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

//Add more components that you want on the home page
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

