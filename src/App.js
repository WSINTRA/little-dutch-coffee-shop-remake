import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.scss';
import LandingPage from './components/LandingPage'
import { NavHashLink as NavLink } from 'react-router-hash-link';

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

renderLandingPage = () => {
return (
		<LandingPage 
		    menuOpen={this.state.menuOpen}
		    openCloseMenu={this.openCloseMenu}/>
    	)
}


render() {
  	
	
  	return (
    <div>   
        <Route exact path="/" component={this.renderLandingPage} />
        <Route exact path="/login" component={this.renderLandingPage} />
        <Route exact path="/register" component={this.renderLandingPage} />

    </div>
    );
  	 
  };
};

export default App;
