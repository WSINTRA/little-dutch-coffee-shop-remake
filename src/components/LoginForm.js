
import React from "react";

const LoginForm = (props) => (

 <div id="login"className="login">
  	<div className="login__box">
  		<div className="login__box-detail">
  			<h1>Login</h1><br/>
  			<div className="username">
  				<label>Username</label><input type="text"/>
  			</div><br/>
        
            <div className="password">
  				<label>Password{" "} </label><input type="password"/>
  			</div>
            	
            <div className="login__submit">SUBMIT</div>
  		

  	</div>
  </div> 
 </div>	
);

export default LoginForm;