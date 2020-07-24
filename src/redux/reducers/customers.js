import State from './state/customer-state';
const ALL_CUSTOMERS = "ALL_CUSTOMERS";
const ADD_USER_DATA_TO_STATE = "ADD_USER_DATA_TO_STATE";
const LOGOUT = "LOGOUT";

function CustomerReducer(state=State, action) {
    switch (action.type) {
    
      case LOGOUT:
        localStorage.clear();
        return {
          ...state,
          loggedIn: false,
          userData: {},
          activeOption: "",
          activeLink: "Your Account",
          login: { username: "", password: "" },
        };
        
      case ALL_CUSTOMERS:
        return { ...state, allCustomersData: action.payload };
  
      case ADD_USER_DATA_TO_STATE:
        return { ...state, loggedIn: true, userData: action.payload };

      default:
        return state;
    }
  }
  
  export default CustomerReducer;