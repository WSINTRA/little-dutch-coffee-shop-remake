import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import LandingPage from './components/LandingPage'
import UserPage from './components/UserPage'
import { connect } from 'react-redux'

class App extends React.Component {

state = {
  cartOpen: false,
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
                    return null
                }
                else {
                   return res.json()
                }
                
            }).then(userData=> {
              
              this.props.createUserStateFromFetch(userData.user)
            }
              )  
            
        }
    if(!localStorage.products) {
        fetch(productUrl).then(res => {
                if (!res.ok) {
                    console.log("server error", res);
                }
                return res.json()
            }).then(res => {
                   //Set this object to store in localStorage
                   this.props.createProductStateFromFetch(res);

            })  
    }
}



openCloseCart=()=>{ //TODO - Shift this control into Redux state management
  this.setState(prevState=>{
    return {
      cartOpen: !prevState.cartOpen
    }
  })
}


renderLandingPage = () => {
return (
  false ? this.renderUserPage() : <LandingPage />
		// this.props.loggedIn ? this.renderUserPage() : <LandingPage />
    	)
}

renderUserPage = (path) => {
  let urlFinder=(path, User)=>{
  switch(path.location.pathname){
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
        openCloseCart={this.openCloseCart}
        cartOpen={this.state.cartOpen}
        logOut={this.LogoutFunction}
        />
if (path){
return !!path.location.pathname === true ? urlFinder(path, User) : User;
}
else {return User}  
}

LogoutFunction = (props)=> {
this.props.logOut()
}

render() {
  	
	
  	return (
    <div>
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
