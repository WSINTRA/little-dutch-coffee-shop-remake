import React from "react";
import styled, {keyframes} from 'styled-components';
import {fadeInLeft} from 'react-animations';
import BackDrop from './BackDrop'
import MenuHeader from './MenuHeader'
import Header from './Header'
import LandingBox from './LandingBox'


const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeInLeft}`} 1`;

const LandingPage = (props) => (

 <div> 
 {props.menuOpen ? <Bounce><MenuHeader menuButton={props.openCloseMenu}/></Bounce>: 
	<Header menuButton={props.openCloseMenu}/>} 
    <BackDrop/><LandingBox/>
</div>
);

export default LandingPage;
