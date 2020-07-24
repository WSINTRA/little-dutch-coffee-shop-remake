//reducer
import initialState from "./state";
import { combineReducers } from 'redux';
import CartReducer from './reducers/cart';
import CustomerReducer from './reducers/customers';
import ProductReducer from './reducers/products';
import ReviewReducer from './reducers/reviews';
import { formObjectCreator } from "./helpers/form-helpers";

const BUTTON_FEEDBACK = "BUTTON_FEEDBACK";
const CLEAR_ALL_FIELDS = "CLEAR_ALL_FIELDS";
const EMPLOYEE_FORM_INPUT = "EMPLOYEE_FORM_INPUT";
const TOGGLE_MENU = "TOGGLE_MENU";
const SOME_OPTION = "SOME_OPTION";
const SOME_LINK = "SOME_LINK";
const LOGIN_FORM_CONTROL = "LOGIN_FORM_CONTROL";
const REGISTER_FORM_CONTROL = "REGISTER_FORM_CONTROL";
const SEARCH_TERM_CONTROL = "SEARCH_TERM_CONTROL";

const toggleMenu = (stateMenuOpen) => {
  let stateCopy = stateMenuOpen;
  stateCopy = !stateCopy;
  return stateCopy;
};

const rootReducer = combineReducers( { 
  CartReducer, 
  CustomerReducer, 
  ProductReducer, 
  ReviewReducer, 
  reducer });

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUTTON_FEEDBACK:
      return { ...state, buttonPress: action.payload };

    case CLEAR_ALL_FIELDS:
      return {
        ...state,
        productForm: {
          breed: "",
          productTitle: "",
          description: "",
          price: 0.0,
          imageURL: "",
          starRate: 0,
          checkbox: true,
          editID: 0,
        },
      };

    case EMPLOYEE_FORM_INPUT:
      let employeeUpdate = formObjectCreator(
        "employeeForm",
        action.payload,
        state
      );
      return { ...state, employeeForm: employeeUpdate };

    case TOGGLE_MENU:
      let toggle = toggleMenu(state.menuOpen);
      return { ...state, menuOpen: toggle };

    case SEARCH_TERM_CONTROL:
      return { ...state, searchTerm: action.payload };

    case SOME_OPTION: //Used for navigation
      return { ...state, activeOption: action.payload };

    case SOME_LINK: //Used for navigation
      return { ...state, activeLink: action.payload };

    case LOGIN_FORM_CONTROL:
      let loginUpdate = formObjectCreator("login", action.payload, state);
      return { ...state, login: loginUpdate };

    case REGISTER_FORM_CONTROL:
      let registerUpdate = formObjectCreator("form", action.payload, state);
      return { ...state, form: registerUpdate };

    default:
      return state;
  }
}

export default rootReducer;
