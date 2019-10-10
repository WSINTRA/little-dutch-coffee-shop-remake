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
}

componentDidMount(){
  let userUrl = "http://localhost:3050/v1/profile"
  let productUrl = "http://localhost:3050/v1/all_products"
     if (localStorage.myJWT) {
            fetch(userUrl, {
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
                    this.props.createUserStateFromFetch(res.user)
                    
            })  
            
        }
    if(!localStorage.products) {
        fetch(productUrl).then(res => {
                if (!res.ok) {
                    console.log("server error", res);
                }
                return res.json()
            }).then(res => {
                
                   this.props.createProductStateFromFetch(res)

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
		this.props.loggedIn ? this.renderUserPage() : <LandingPage 
		    menuOpen={this.state.menuOpen}
		    openCloseMenu={this.openCloseMenu}/>
    	)
}
renderUserPage = (path) => {
  let urlFinder=(path, User)=>{
  switch(path.match.url){
  //Add more statements to this as the app grows for links to work with Router
  case "/weekly-menu":
  return (this.props.getActiveLink("Weekly Menu"),
    User )
  case "/user":
  return (this.props.getActiveLink("Your Account"), User)
  default :
  return (this.props.getActiveLink("Your Account"), User)

    };
  }
const User = <UserPage 
        menuOpen={this.state.menuOpen}
        openCloseMenu={this.openCloseMenu}
        menuItem={this.state.menuItem}
        selectMenuItem={this.selectMenuItem}
        logOut={this.LogoutFunction}
        />

return path === true ? urlFinder(path, User) : User;

}

LogoutFunction = (props)=> {
this.props.logOut()
}
// NoMatch=()=>(
//   <div>ERROR 404 -unknown url</div>)


render() {
  	
	
  	return (
    <div>
    {console.log(this.props, "APP, RENDER")}
        <Route exact path="/" component={this.renderLandingPage} />
        <Route exact path="/login" component={this.renderLandingPage} />
        <Route exact path="/register" component={this.renderLandingPage} />
        <Route exact path="/user" component={this.props.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/weekly-menu" component={this.props.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/cbd-menu" component={this.props.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/our-story" component={this.props.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/statement" component={this.props.loggedIn ? this.renderUserPage : this.renderLandingPage} />
        <Route exact path="/account" component={this.props.loggedIn ? this.renderUserPage : this.renderLandingPage} />
      
      
    </div>
    );
  	 
  };
};

function msp(store){
  return {
    loggedIn: store.loggedIn
  }
}
function mdp(dispatch){
  return {
    logOut: (obj)=>{
      dispatch({type:"LOGOUT", payload:obj})
    },
    getActiveLink: (obj)=> {
      dispatch({type:"SOME_LINK", payload: obj})
    },
    logIn: (logInBool)=>{
      dispatch({type:"ADD_LOGIN_BOOL", payload: logInBool})
    },
    createUserStateFromFetch: (fetchData)=>{
      dispatch( {type:"ADD_USER_DATA_TO_STATE", payload: fetchData})
    },
    createProductStateFromFetch: (fetchData)=>{
      dispatch( {type:"ADD_PRODUCT_DATA_TO_STATE", payload: fetchData})
    }
  }
}

export default connect(msp,mdp)(App);
