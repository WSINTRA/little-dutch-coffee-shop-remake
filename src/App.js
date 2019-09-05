import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.scss';
import LandingPage from './components/LandingPage'
import UserPage from './components/UserPage'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { connect } from 'react-redux'

class App extends React.Component {

state = {
	menuOpen: false,
  menuItem: "Weekly Menu", 
  loggedIn: true,
}

openCloseMenu=()=>{
	this.setState(prevState=>{
		return {
			menuOpen: !prevState.menuOpen
		}
	})
}

selectMenuItem=(event)=>{
  console.log("Clicked")
  this.setState({

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
    <UserPage 
        menuOpen={this.state.menuOpen}
        openCloseMenu={this.openCloseMenu}
        menuItem={this.state.menuItem}
        selectMenuItem={this.selectMenuItem}
        />
      )
}


render() {
  	
	
  	return (
    <div>
        <Route exact path="/" component={this.renderLandingPage} />
        <Route exact path="/login" component={this.renderLandingPage} />
        <Route exact path="/register" component={this.renderLandingPage} />
        <Route exact path="/user" component={this.state.loggedIn ? this.renderUserPage : this.renderLandingPage} />
    </div>
    );
  	 
  };
};

function msp(store){

}
function mdp(dispatch){
  
}

export default connect(msp,mdp)(App);
