import React from "react";
import styled, {keyframes} from 'styled-components';
import {fadeIn, bounce} from 'react-animations';
import BackDrop from './BackDrop'
import MenuHeader from './MenuHeader'
import Header from './Header'
import LandingBox from './LandingBox'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const FadeIn = styled.div`animation: 1.8s ${keyframes`${fadeIn}`} 1`;

const LandingPage = (props) => (

 <div> <FadeIn>
 {props.menuOpen ? <MenuHeader menuButton={props.openCloseMenu}/>: 
	<Header menuButton={props.openCloseMenu}/>} 
    <BackDrop/><LandingBox/>
    <LoginForm/><RegisterForm/>
</FadeIn>
</div>
);

export default LandingPage;
