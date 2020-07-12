import React from "react";
import logo from "../../images/header-logo.png";
import menuOpen from "../../svg/Menu.svg";
import { Link } from "react-router-dom";
import close from "../../images/Close.png";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";

const revertToggledItems=(props)=>{
  props.openCart(false);
  props.closeSuccess();
  props.toggleProductDetail(false);

}

const Navigation = (props) => {
  const page = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={page} onClick={()=>revertToggledItems(props)}>
      <ul>
        <li>
          <Link to="/menu"> Weekly menu </Link>
        </li>
        <li>
          <Link to="/"> Stash box </Link>
        </li>
        <li>
          <Link to="/account"> Account </Link>
        </li>
        <li>
          <Link onClick={() => props.logout()} to="/">
            {" "}
            Logout{" "}
          </Link>
        </li>
      </ul>
    </animated.div>
  );
};

const Header = (props) => (
  <div className="header">
    <Link to="/">
      <img className="logo" style={{ width: "150px" }} alt="logo" src={logo} />
    </Link>
    <div className="desktop-nav">
      <Navigation {...props} />
    </div>
    <div className="mobile-header">
      {props.menuOpen ? (
        <img
          onClick={() => props.openCloseMenu()}
          alt="close button"
          src={close}
        />
      ) : (
        <img
          onClick={() => props.openCloseMenu()}
          alt="open menu button"
          src={menuOpen}
        />
      )}

      {props.menuOpen ? (
        <div className="mobile-nav">
          <Navigation {...props} />
        </div>
      ) : null}
    </div>
  </div>
);

function mdp(dispatch) {
  return {
    openCloseMenu: (action) => {
      dispatch({ type: "TOGGLE_MENU", payload: action });
    },
     openCart: (action) => {
      dispatch({ type: "TOGGLE_CART_OVERVIEW", payload: action })
    },
    closeSuccess: (action) => {
      dispatch({ type: "CLOSE_SUCCESS_WINDOW", payload: action });
    },
     toggleProductDetail: (object) => {
      dispatch({ type: "TOGGLE_PRODUCT_DETAIL", payload: object });
    },
  };
}
function msp(state) {
  return {
    menuOpen: state.menuOpen,
  };
}

export default connect(msp, mdp)(Header);
