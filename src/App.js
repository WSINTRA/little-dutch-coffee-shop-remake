import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.scss';
import LandingPage from './components/LandingPage'


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
random = () => {
	return <div>HELLO Will</div>
}

render() {
  	
	
  	return (
    <div>
    <Switch>
    	
        <Route exact path="/" component={this.renderLandingPage} />
        <Route path="/will" component={this.random} />

    </Switch>
    
    </div>
    );
  	 
  };
};

export default App;
