import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import React from "react";
import submitLogin from './submitLogin'

const loginSubmit=(props)=>{

console.log(props,"login submit")
submitLogin(props)
// console.log(test)

}

const controlledInput=(e,props)=>{
  const changeFunction = props.FormControl
  const value = e.target.value
  const label = e.target.name
  const payload = {}
  payload[label] = value 
  changeFunction(payload)
}

const LoginForm = (props) => (

 <div id="login"className="login">
  	<div className="login__box">
  		<div className="login__box-detail">
  			<h1>Login</h1><br/>
  			<div className="username">
  				<label>Username</label>
          <input 
          name="username"
          onChange={ (e)=>{ controlledInput(e,props) } }
          type="text"
          value={props.login.username}/>
  			</div><br/>
        
            <div className="password">
  				<label>Password{" "} </label><input
           name="password"
           onChange={ (e)=>{ controlledInput(e,props) } }
           type="password" 
           value={props.login.password}/>
  			</div>
            	
            <div onClick={()=>{loginSubmit(props)}}
            className="login__submit">SUBMIT</div>
  		

  	</div>
  </div> 
 </div>	
);

function msp(state){
  return {
    login: state.login,
  };
}
function mdp(dispatch){
  return {
    logIn: (logInBool)=>{
      dispatch({type:"ADD_LOGIN_BOOL", payload: logInBool})
    },
    createStateFromFetch: (fetchData)=>{
      dispatch( {type:"ADD_USER_DATA_TO_STATE", payload: fetchData})
    },
    FormControl: (object)=> {
        dispatch({type:"LOGIN_FORM_CONTROL", payload: object})
      },
    }
}

export default withRouter(connect(msp,mdp)(LoginForm));