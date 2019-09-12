import { connect } from 'react-redux'
import React from "react";

const registerSubmit=()=>{
  console.log("submit")
}

const ControlledInput = (props, input) => {

  let value = input.target.value
  let label = input.target.name
  let payload = {}
  payload[label] = value 
  props.registerFormControl(payload)

}

const RegisterForm = (props) => (
  <div id="register"className="register">
  <div className="register__box">
  <div className="register__box-detail">
  <h1>Register</h1><br/>
  
  <label>email</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="email"
  value={props.form.email}
  type="text"/><br/>

  <label>username</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="username"
  value={props.form.username}
  type="text"/><br/>

  <label>address</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="address"
  value={props.form.address}
  type="text"/><br/>

  <label>city</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="city"
  value={props.form.city}
  type="text"/><br/>

  <label>state</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="state"
  value={props.form.state}
  type="text"/><br/>

  <label>zip code</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="zipCode"
  value={props.form.state}
  type="text"/><br/>

  <label>password</label><br/><input 
  onChange={(e)=>ControlledInput(props, e)} 
  name="password"
  value={props.form.password}
  type="password"/><br/>

  <label>confirm password</label><br/><input
  onChange={(e)=>ControlledInput(props, e)} 
  name="confirmPassword"
  value={props.form.confirmPassword}
  type="password"/><br/><br/>

    <div className="register__submit"onClick={(e)=>registerSubmit(e)}>REGISTER</div>
  </div></div>
  </div>
);

function msp(state){
  return {
    form: state.form,
  };
}
function mdp(dispatch){
  return {
    registerFormControl: (object)=> {
      dispatch({type:"FORM_CONTROL", payload: object})
    },
  }
}
export default connect(msp,mdp)(RegisterForm);

//need to make entire form a controlled form with Redux State Management