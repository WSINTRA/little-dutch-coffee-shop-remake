import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.scss";
import LandingPage from "./components/newUserStack/LandingPage";
import UserPage from "./components/UserStack/UserPage";
import { connect } from "react-redux";
import RegisterForm from "./components/newUserStack/RegisterForm";
import Header from "./components/UserStack/Header";
import Account from "./components/UserStack/Account";
import WeeklyMenu from "./components/UserStack/WeeklyMenu";
import ProductDetail from "./components/UserStack/ProductDetails";
import fetchCustomers from "./components/services/customerFetch";
import SalesStats from "./components/AdminComponents/SalesStats";
import ProductForm from "./components/AdminComponents/ProductForm";
import SearchListProducts from "./components/AdminComponents/SearchListProducts";
import Cart from "./components/UserStack/Cart";

class App extends React.Component {
  componentDidMount() {
    let userUrl = "http://localhost:3050/v1/profile";
    let productUrl = "http://localhost:3050/v1/all_products";
    if (localStorage.myJWT) {
      try {
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
      } catch (err) {
        console.log(err);
      }
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
    if (localStorage.cart) {
      console.log(localStorage.cart);
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
        {!this.props.customer.loggedIn ? (
          <React.Fragment>
            <div className="heading">
              <div className="sub-heading">
                <h3>{business_sub_header}</h3>
              </div>
              <Link to="/"> home </Link>
            </div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegisterForm} />{" "}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Header logout={() => this.LogoutFunction()} />
            <Route exact path="/" component={UserPage} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/menu" component={WeeklyMenu} />
            <Route
              exact
              path={`product-detail-${""}`}
              component={ProductDetail}
            />
            <Route
              exact
              path="/account/AddNewProduct"
              component={ProductForm}
            />
            <Route
              exact
              path="/account/RemoveProduct"
              component={SearchListProducts}
            />
            <Route exact path="/account/AddNewUser" component={SalesStats} />
            <Route exact path="/account/RemoveUser" component={SalesStats} />
            <Route exact path="/cart" component={Cart} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

function msp(store) {
  return {
    customer: store.CustomerReducer,
    cart: store.CartReducer,
    state: store
  };
}
function mdp(dispatch) {
  return {
    logOut: (obj) => {
      dispatch({ type: "LOGOUT", payload: obj });
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
