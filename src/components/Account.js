import React, { useState } from "react";
import { connect } from "react-redux";
import SalesStats from "./SalesStats";
import AdminProducts from "./AdminProducts";
import Customers from "./Customers";
import YourOrders from "./YourOrders";
import Reviews from "./Reviews";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const userMenu = [
  "YourOrders", 
  "Reviews", 
  "Cart", 
  "Account Settings"
];
const staffMenu = [
  "SalesStats",
  "AllOrders",
  "Customers",
  "Employees",
  "AdminProducts",
];

const renderSelection = (option, props) => {
  //Add any new menu items in here for the Account page, eventually they should match the userMenu and staffMenu
  let selection = {
    "SalesStats":SalesStats, 
    "Customers":Customers, 
    "AdminProducts":AdminProducts, 
    "YourOrders":YourOrders, 
    "Reviews":Reviews
  };
    //If the option is a valid selection then return the React Functional Component with props
  if(!!selection[option]){
    return selection[option](props)
  }
};

const displayOption = (option, fadeIn, setFadeIn, growWindow, props) => {
  return (
    <animated.div style={growWindow}>
      <div className="frame">
        <div className="close-icon" onClick={() => setFadeIn(!fadeIn)}>
          <FontAwesomeIcon size="3x" icon={faWindowClose} />
        </div>
        <h1>{option}</h1>
        {renderSelection(option, props)}
      </div>
    </animated.div>
  );
};

const clickActionForOptions = (e, props) => {
  props.activeOptionSelect(e.target.innerText);
};

const Account = (props) => {
  const [fadeIn, setFadeIn] = useState(true);
  const spring = useSpring({
    opacity: fadeIn ? 1 : 0,
    display: fadeIn ? "inherit" : "none",
  });
  const page = useSpring({ opacity: 1, from: { opacity: 0 } });
  const growWindow = useSpring({
    opacity: fadeIn ? 0 : 1,
    display: !fadeIn ? "inherit" : "none",
  });
  return (
    <animated.div style={page}>
      <div className="account">
        <div className="banner">
          {props.banner || "OPTIONS"}
          {props.currentUser.username === undefined
            ? props.currentUser.username
            : null}
        </div>
        <div>
          {displayOption(
            props.activeOption,
            fadeIn,
            setFadeIn,
            growWindow,
            props
          )}
        </div>
        {props.currentUser.staff ? (
          <div className="menu">
            <animated.div style={spring}>
              {staffMenu.map((menu, index) => {
                return (
                  <div
                    key={index}
                    className={`option`}
                    onClick={() => setFadeIn(!fadeIn)}
                  >
                    <a href="#" onClick={(e) => clickActionForOptions(e, props)}>
                      {menu}
                    </a>
                  </div>
                );
              })}
            </animated.div>
          </div>
        ) : (
          <div className="menu">
            <animated.div style={spring}>
              {userMenu.map((menu, index) => {
                return (
                  <div
                    key={index}
                    className={`option`}
                    onClick={() => setFadeIn(!fadeIn)}
                  >
                    <a href="#" onClick={(e) => clickActionForOptions(e, props)}>
                      {menu}
                    </a>
                  </div>
                );
              })}
            </animated.div>
          </div>
        )}
      </div>
    </animated.div>
  );
};

function mdp(dispatch) {
  return {
    activeOptionSelect: (action) => {
      dispatch({ type: "SOME_OPTION", payload: action });
    },
    allCustomers: (action) => {
      dispatch({ type: "ALL_CUSTOMERS", payload: action });
    },
  };
}
function msp(state) {
  return {
    currentUser: state.userData,
    activeOption: state.activeOption,
    customersData: state.allCustomersData,
  };
}

export default connect(msp, mdp)(Account);
