import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import React from "react";
import submitRegistration from "./submitRegistration"

const passwordValid=(pass,conf)=>{
  if (pass === conf){
    return true
  }
}
const emailValid=(email)=>{
let checkForAt = /\S+@\S+\.\S+/.test(email)
return checkForAt
}
const usernameValid=(username)=>{
//Just check length and do a unique check in backend
  if(username.length >= 1 && username.length < 15){
  return true
  }
}
const addressValid=(address)=>{
  if(address.length >= 1){
   return true
  }
}
const cityValid=(city)=>{
  if(city.length >= 1){
   return true
  } 
}
const stateValid=(state)=>{
  //This must a be a valid legal state for recreational use 
  //The recreational use of cannabis is legalized in 11 states 
  // According to https://en.wikipedia.org/wiki/Legality_of_cannabis_by_U.S._jurisdiction
  //(Alaska, California, Colorado, Illinois, Maine, Massachusetts, 
  //Michigan, Nevada, Oregon, Vermont, and Washington)
  //
  //Will implement this later.
}
const zipValid=(zip)=>{
   let zipCodeCheck = /^\d{5}$|^\d{5}-\d{4}$/.test(zip)
     return zipCodeCheck
}

const registerSubmit=(form, props)=>{
  //Build frontEnd validations for the form here
  let email, username, address, city, state, zip, password, confirmPass;
  email = form.email;
  username = form.username;
  address = form.address;
  city = form.city;
  state = form.state;
  zip = form.zipCode;
  password = form.password;
  confirmPass = form.confirmPassword;
  if (
    passwordValid(password,confirmPass) &&
    emailValid(email) &&
    usernameValid(username) &&
    addressValid(address) &&
    cityValid(city) &&
    zipValid(zip) 
    )
    {
    let registerObject = {email: email, username: username, address: address, city: city, state: state, zip: zip, password:password}
    submitRegistration(registerObject, props)
    
    }
  else console.log("Something not right")
  


}

const ControlledInput = (props, input) => {

  const value = input.target.value
  const label = input.target.name
  const payload = {}
  payload[label] = value 
  props.registerFormControl(payload)

}

const RegisterForm = (props) => (
  <div id="register"className="register">
  <div className="register__box">
    <div className="register__box-detail">
      <h1>Register</h1><br/>
  
       

          <div className="email">
            <label >email</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="email"
            value={props.form.email}
            type="text"/>
          </div><br/>

          <div className="username">
            <label >username</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="username"
            value={props.form.username}
            type="text"/>
          </div><br/>
          
          <div className="address">
            <label >address</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="address"
            value={props.form.address}
            type="text"/>
          <br/></div>

          <div className="city">
            <label >city</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="city"
            value={props.form.city}
            type="text"/>
          <br/></div>
  
          <div className="state">
            <label >state</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="state"
            value={props.form.state}
            type="text"/>
          <br/></div>

          <div className="zip">
            <label >zip code</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="zipCode"
            value={props.form.zipCode}
            type="text"/>
          <br/></div>

          <div className="password">
            <label >password</label><br/><input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="password"
            value={props.form.password}
            type="password"/>
          <br/></div>

          <div className="confirm">
            <label >confirm password</label><br/><input
            onChange={(e)=>ControlledInput(props, e)} 
            name="confirmPassword"
            value={props.form.confirmPassword}
            type="password"/>
          </div><br/><br/>
  
          <div className="submit"onClick={()=>registerSubmit(props.form, props)}>REGISTER</div>
      
    </div>
  </div>
  </div>
);

function msp(state){
  return {
    form: state.form,
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
    // submitRegisterForm: (object)=> {
    //   dispatch({type:"FORM_SUBMIT", payload: object})
    // },
    registerFormControl: (object)=> {
      dispatch({type:"REGISTER_FORM_CONTROL", payload: object})
    },
  }
}
export default withRouter(connect(msp,mdp)(RegisterForm));


//need to make entire form a controlled form with Redux State Management