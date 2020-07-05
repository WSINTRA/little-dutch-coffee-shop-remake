import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import React from "react";
import submitRegistration from "./services/submitRegistration";

const passwordValid = (pass, conf) => {
  if (pass === conf) {
    return true;
  }
};
const emailValid = (email) => {
  let checkForAt = /\S+@\S+\.\S+/.test(email);
  return checkForAt;
};
const usernameValid = (username) => {
  //Just check length and do a unique check in backend
  if (username.length >= 1 && username.length < 15) {
    return true;
  }
};
const addressValid = (address) => {
  if (address.length >= 1) {
    return true;
  }
};
const cityValid = (city) => {
  if (city.length >= 1) {
    return true;
  }
};
const stateValid = (state) => {
  //This must a be a valid legal state for recreational use
  //The recreational use of cannabis is legalized in 11 states
  // According to https://en.wikipedia.org/wiki/Legality_of_cannabis_by_U.S._jurisdiction
  //(Alaska, California, Colorado, Illinois, Maine, Massachusetts,
  //Michigan, Nevada, Oregon, Vermont, and Washington)
  //
  //Will implement this later.
};
const zipValid = (zip) => {
  let zipCodeCheck = /^\d{5}$|^\d{5}-\d{4}$/.test(zip);
  return zipCodeCheck;
};

const registerSubmit = (form, props) => {
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
    passwordValid(password, confirmPass) &&
    emailValid(email) &&
    usernameValid(username) &&
    addressValid(address) &&
    cityValid(city) &&
    zipValid(zip)
  ) {
    let registerObject = {
      email: email,
      username: username,
      address: address,
      city: city,
      state: state,
      zip: zip,
      password: password,
    };
    submitRegistration(registerObject, props);
  } else console.log("Something not right");
};

const ControlledInput = (props, input) => {
  const value = input.target.value;
  const label = input.target.name;
  const payload = {};
  payload[label] = value;
  props.registerFormControl(payload);
};

const RegisterForm = (props) => (
  <div id="register" className="register">
    <h1>Sign up</h1>
    <Link to="/">Login ?</Link>
    <div className="register-form">
      <div className="row-1">
        {/* <label >email</label> */}
        <input
          placeholder="Email address"
          onChange={(e) => ControlledInput(props, e)}
          name="email"
          value={props.form.email}
          type="text"
        />

        {/* <label >username</label> */}
        <input
          placeholder="Full name"
          onChange={(e) => ControlledInput(props, e)}
          name="username"
          value={props.form.username}
          type="text"
        />
      </div>
      <div className="row-2">
        {/* <label >address</label>*/}
        <input
          placeholder="Address"
          onChange={(e) => ControlledInput(props, e)}
          name="address"
          value={props.form.address}
          type="text"
        />

        {/* <label >city</label> */}
        <input
          placeholder="City"
          onChange={(e) => ControlledInput(props, e)}
          name="city"
          value={props.form.city}
          type="text"
        />
      </div>
      <div className="row-3">
        {/* <label >state</label> */}
        <input
          placeholder="State"
          onChange={(e) => ControlledInput(props, e)}
          name="state"
          value={props.form.state}
          type="text"
        />

        {/* <label >zip code</label> */}
        <input
          placeholder="zip code"
          onChange={(e) => ControlledInput(props, e)}
          name="zipCode"
          value={props.form.zipCode}
          type="text"
        />
      </div>
      <div className="row-4">
        {/* <label >password</label> */}
        <input
          placeholder="password"
          onChange={(e) => ControlledInput(props, e)}
          name="password"
          value={props.form.password}
          type="password"
        />

        {/* <label >confirm password</label> */}
        <input
          placeholder="confirm password"
          onChange={(e) => ControlledInput(props, e)}
          name="confirmPassword"
          value={props.form.confirmPassword}
          type="password"
        />
      </div>

      <div
        className="submit-button"
        onClick={() => registerSubmit(props.form, props)}
      >
        Register
      </div>
    </div>
  </div>
);

function msp(state) {
  return {
    form: state.form,
  };
}
function mdp(dispatch) {
  return {
    logIn: (logInBool) => {
      dispatch({ type: "ADD_LOGIN_BOOL", payload: logInBool });
    },
    createStateFromFetch: (fetchData) => {
      dispatch({ type: "ADD_USER_DATA_TO_STATE", payload: fetchData });
    },
    registerFormControl: (object) => {
      dispatch({ type: "REGISTER_FORM_CONTROL", payload: object });
    },
  };
}
export default withRouter(connect(msp, mdp)(RegisterForm));
