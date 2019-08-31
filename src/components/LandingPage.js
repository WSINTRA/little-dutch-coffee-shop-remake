import React from "react";
import styled, {keyframes} from 'styled-components';
import {fadeInUp} from 'react-animations';
import BackDrop from './BackDrop'
import MenuHeader from './MenuHeader'
import Header from './Header'
import LandingBox from './LandingBox'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeInUp}`} 1`;

const LandingPage = (props) => (

 <div> 
 {props.menuOpen ? <Bounce><MenuHeader menuButton={props.openCloseMenu}/></Bounce>: 
	<Header menuButton={props.openCloseMenu}/>} 
    <BackDrop/><LandingBox/>
    <LoginForm/><RegisterForm/>

</div>
);

export default LandingPage;
