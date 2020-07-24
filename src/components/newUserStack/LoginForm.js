import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import React from "react";
import submitLogin from "../services/submitLogin";
import logo from "../../images/header-logo.png";
const controlledInput = (e, props) => {
  const changeFunction = props.FormControl;
  const value = e.target.value;
  const label = e.target.name;
  const payload = {};
  payload[label] = value;
  changeFunction(payload);
};

const LoginForm = (props) => (
  <div id="login" className="login">
    <h1>Welcome</h1>
    {console.log(props)}
    <Link to="/register">Sign up?</Link>
    <div className="login-form">
    <img className="logo" style={{ width: "150px" }} alt="logo" src={logo} />
      <input
        name="username"
        placeholder="Email address"
        onChange={(e) => {
          controlledInput(e, props);
        }}
        type="text"
        value={props.login.username}
      />
      <br />
      <input
        name="password"
        onChange={(e) => {
          controlledInput(e, props);
        }}
        type="password"
        placeholder="Password"
        value={props.login.password}
      />
      <p>forgot your password?</p>
      <div
        onClick={() => {
          submitLogin(props);
        }}
        className="submit-button"
      >
        Submit
      </div>
    </div>
  </div>
);

function msp(state) {
  return {
    login: state.reducer.login,
  };
}
function mdp(dispatch) {
  return {
    //These 2 pass along to submitLogin
    createStateFromFetch: (fetchData) => {
      dispatch({ type: "ADD_USER_DATA_TO_STATE", payload: fetchData });
    },
    allCustomers: (action) => {
      dispatch({ type: "ALL_CUSTOMERS", payload: action });
    },
    ///
    FormControl: (object) => {
      dispatch({ type: "LOGIN_FORM_CONTROL", payload: object });
    }
   
  };
}

export default withRouter(connect(msp, mdp)(LoginForm));
