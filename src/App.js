import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.scss';
import LandingPage from './components/LandingPage'
import UserPage from './components/UserPage'
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
renderUserPage = () => {
return (
    <UserPage />
      )
}


render() {
  	
	
  	return (
    <div>
        <Route exact path="/" component={this.renderLandingPage} />
        <Route exact path="/login" component={this.renderLandingPage} />
        <Route exact path="/register" component={this.renderLandingPage} />
        <Route exact path="/user" component={this.renderUserPage} />
    </div>
    );
  	 
  };
};

export default App;
