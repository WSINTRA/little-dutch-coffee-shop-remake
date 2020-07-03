import { connect } from 'react-redux'
import { withRouter, Link  } from 'react-router-dom'
import React from "react";
import submitLogin from './submitLogin'
import RegisterForm from './RegisterForm';

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
   <h1>Welcome</h1>
  			<Link to="/register">Sign up?</Link>
  			<div className="login-form">
  				{/* <label>Username</label> */}
          <input 
              name="Email"
              placeholder="Email address"
              onChange={ (e)=>{ controlledInput(e,props) } }
              type="text"
              value={props.login.username}/>
  			<br/>
      
  				{/* <label>Password{" "} </label> */}
          <input
           name="password"
           onChange={ (e)=>{ controlledInput(e,props) } }
           type="password" 
           placeholder="Password"
           value={props.login.password}/>
           <p>forgot your password?</p>
            <div onClick={()=>{ submitLogin(props) } }
            className="submit-button">Submit</div>
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
    createStateFromFetch: (fetchData)=>{
      dispatch( {type:"ADD_USER_DATA_TO_STATE", payload: fetchData})
    },
    FormControl: (object)=> {
        dispatch({type:"LOGIN_FORM_CONTROL", payload: object})
      },
    }
}

export default withRouter(connect(msp,mdp)(LoginForm));