
import React from "react";

const RegisterForm = (props) => (
  <div id="register"className="register">
  <div className="register__box">
  <div className="register__box-detail">
  <h1>Register</h1><br/>
  <label>first name</label><br/><input type="text"/><br/>
  <label>last name{" "} </label><br/><input type="text"/><br/>
  <label>email</label><br/><input type="text"/><br/>
  <label>username{" "} </label><br/><input type="text"/><br/>
  <label>password</label><br/><input type="password"/><br/>
  <label>confirm password{" "} </label><br/><input type="password"/>

    <div className="register__submit">REGISTER</div>
  </div></div>
  </div>
);

export default RegisterForm;