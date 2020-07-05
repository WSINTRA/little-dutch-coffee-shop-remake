import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import UserPage from "./components/UserPage";
import { connect } from "react-redux";
import RegisterForm from "./components/RegisterForm";
import Header from "./components/Header";
import Account from "./components/Account";
import WeeklyMenu from "./components/WeeklyMenu";
import ProductDetail from "./components/ProductDetails";
import fetchCustomers from "./components/services/customerFetch";

class App extends React.Component {
  state = {
    cartOpen: false,
  };

  componentDidMount() {
    let userUrl = "http://localhost:3050/v1/profile";
    let productUrl = "http://localhost:3050/v1/all_products";
    if (localStorage.myJWT) {
      fetch(userUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.myJWT}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            console.log("not logged in", res);
            return null;
          } else {
            return res.json();
          }
        })
        .then((userData) => {
          if (userData.user.staff) {
            //Put any specifics for staff login here
            fetchCustomers(this.props.allCustomers);
          }
          this.props.createUserStateFromFetch(userData.user);
        });
    }
    if (!localStorage.products) {
      fetch(productUrl)
        .then((res) => {
          if (!res.ok) {
            console.log("server error", res);
          }
          return res.json();
        })
        .then((res) => {
          //Set this object to store in localStorage
          this.props.createProductStateFromFetch(res);
        });
    }
  }

  LogoutFunction = (props) => {
    this.props.logOut();
  };

  render(props) {
    const business_header = "The Little Dutch Coffee Shop";
    const business_sub_header =
      "Online high grade dispensary built with the official secrets act";

    return (
      <div className="container">
        {!this.props.loggedIn ? (
          <>
            <div className="heading">
              <h1>{`${business_header}`}</h1>
              <hr />
              <div className="sub-heading">
                <h3>{`${business_sub_header}`}</h3>
              </div>
            </div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegisterForm} />{" "}
          </>
        ) : (
          <>
            <Header logout={() => this.LogoutFunction()} />
            <Route exact path="/" component={UserPage} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/menu" component={WeeklyMenu} />
            <Route
              exact
              path={`product-detail-${""}`}
              component={ProductDetail}
            />
          </>
        )}
      </div>
    );
  }
}

function msp(store) {
  return {
    loggedIn: store.loggedIn,
  };
}
function mdp(dispatch) {
  return {
    logOut: (obj) => {
      dispatch({ type: "LOGOUT", payload: obj });
    },
    getActiveLink: (obj) => {
      dispatch({ type: "SOME_LINK", payload: obj });
    },
    logIn: (logInBool) => {
      dispatch({ type: "ADD_LOGIN_BOOL", payload: logInBool });
    },
    createUserStateFromFetch: (fetchData) => {
      dispatch({ type: "ADD_USER_DATA_TO_STATE", payload: fetchData });
    },
    createProductStateFromFetch: (fetchData) => {
      dispatch({ type: "ADD_PRODUCT_DATA_TO_STATE", payload: fetchData });
    },
    allCustomers: (action) => {
      dispatch({ type: "ALL_CUSTOMERS", payload: action });
    },
  };
}

export default connect(msp, mdp)(App);
