
import React from "react";

const LoginForm = (props) => (
  <div id="login"className="login">
  <div className="login__box">
  <div className="login__box-detail">
  <h1>login</h1>
  <label>Username</label><input type="text"/><br/>
  <label>Password{" "} </label><input type="password"/>
    <div className="login__submit">SUBMIT</div>
  </div></div>
  </div>
);

export default LoginForm;