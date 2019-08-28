import React from 'react';
import './App.scss';
import BackDrop from './components/BackDrop'
import MenuHeader from './components/MenuHeader'
import Header from './components/Header'
import styled, {keyframes} from 'styled-components';
import {fadeInLeft} from 'react-animations';


class App extends React.Component {

state = {
	menuOpen: false,
}


openCloseMenu=()=>{
	this.setState(prevState=>{
		return {
			menuOpen: !prevState.menuOpen
		}
	})
}



  render() {
  	const Bounce = styled.div`animation: 0.5s ${keyframes`${fadeInLeft}`} 1`;
const { menuOpen } = this.state
  	return (
    <div>
   {menuOpen ? <Bounce><MenuHeader menuButton={this.openCloseMenu}/></Bounce>: 
	<Header menuButton={this.openCloseMenu}/>} 
    
    <BackDrop/>
    </div>
    );
  	 
  };
};

export default App;
