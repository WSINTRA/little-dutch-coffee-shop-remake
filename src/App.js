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
  loggedIn: false,
}

componentDidMount(){
     if (localStorage.myJWT) {
            fetch("http://localhost:3050/v1/profile", {
                method: "GET",
                headers: {
                Authorization: `Bearer ${localStorage.myJWT}`
                }
            }).then(res => {
                if (!res.ok) {
                    console.log("not logged in", res);
                }
                return res.json()
            }).then(res => {
                // debugger
                    this.props.createStateFromFetch(res.user)
                    this.setState({
                      loggedIn: true
                    })
            })  
        }
}
openCloseMenu=()=>{
	this.setState(prevState=>{
		return {
			menuOpen: !prevState.menuOpen
		}
	})
}

selectMenuItem=(event)=>{
  let menuItem = event.target.innerText
  if (typeof menuItem === 'string') {
    this.setState({
      menuItem: menuItem
    } )
  }
  
}

renderLandingPage = () => {
return (
		this.state.loggedIn ? this.renderUserPage() : <LandingPage 
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
        <Route exact path="/menu" component={this.state.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/our-story" component={this.state.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/statement" component={this.state.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/account" component={this.state.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/logout" component={this.state.loggedIn ? this.renderUserPage : this.renderLandingPage} />
    </div>
    );
  	 
  };
};

// function msp(store){
//   return {}
// }
function mdp(dispatch){
  return {
    createStateFromFetch: (fetchData)=>{
      dispatch( {type:"ADD_USER_DATA_TO_STATE", payload: fetchData})
    }
  }
}

export default connect(null,mdp)(App);
