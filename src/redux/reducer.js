//reducer
import initialState from './state.js';
const CLEAR_ALL_FIELDS = "CLEAR_ALL_FIELDS";
const EMPLOYEE_FORM_INPUT = "EMPLOYEE_FORM_INPUT";
const REVIEW_ACTIVE = "REVIEW_ACTIVE";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ALL_CUSTOMERS = "ALL_CUSTOMERS";
const CLOSE_SUCCESS_WINDOW = "CLOSE_SUCCESS_WINDOW";
const TOGGLE_MENU = "TOGGLE_MENU";
const ADD_TO_CART = "ADD_TO_CART"
const PRODUCT_FOR_EDIT = "PRODUCT_FOR_EDIT";
const WEEKLY_CHECKBOX = "WEEKLY_CHECKBOX";
const STAR_RATE = "STAR_RATE";
const SOME_OPTION = "SOME_OPTION";
const SOME_LINK = "SOME_LINK";
const REVIEW_FORM_CONTROL = "REVIEW_FORM_CONTROL";
const PRODUCT_FORM_CONTROL = "PRODUCT_FORM_CONTROL";
const LOGIN_FORM_CONTROL = "LOGIN_FORM_CONTROL";
const REGISTER_FORM_CONTROL = "REGISTER_FORM_CONTROL";
const ADD_REVIEW_DATA_TO_USER_STATE = "ADD_REVIEW_DATA_TO_USER_STATE";
const ADD_USER_DATA_TO_STATE = "ADD_USER_DATA_TO_STATE";
const ADD_PRODUCT_DATA_TO_STATE = "ADD_PRODUCT_DATA_TO_STATE";
const SUBMIT_PRODUCT_FORM = "SUBMIT_PRODUCT_FORM";
const CLEAR_PRODUCT_ID = "CLEAR_PRODUCT_ID";
const REMOVE_BY_ID = "REMOVE_BY_ID";
const SEARCH_TERM_CONTROL = "SEARCH_TERM_CONTROL";
const LOGOUT = "LOGOUT";
const BACKSWITCH_PRODUCT_DETAIL = "BACKSWITCH_PRODUCT_DETAIL"




const formObjectCreator=(formType, payload, state)=>{
	let objKey = Object.keys(payload)[0];
	let formObject = {...state[formType], [objKey]:payload[objKey]};
	//creates a controlled field based on incoming payload input field name
    return formObject;
};

const removeById=(state, id)=>{
    let copy = [...state]
    let removedObject = copy.map(el=> el.id !== id ? el : null).filter(el=> el!== null)
    return removedObject
}


const setCurrentFormIDtoZero=(state)=>{
    let copy = {...state};
    copy.editID = 0;
    return copy
}
const starRateInsert=(state, payload )=>{
	let copy = {...state};
    copy.starRate = payload;
    return copy
};
const weeklyCheckBoxBool=(state )=>{
	let copy = {...state};
    copy.checkbox = !copy.checkbox;
    return copy;
};

const addProductToProductArray=(state, payload)=>{
	let copy = [...state, payload];
	return copy
}
const sendProductToEdit=(state, payload)=>{
	let stateCopy = {...state};
	stateCopy.productTitle = payload.title;
	stateCopy.description = payload.description;
	stateCopy.imageURL = payload.image;
	stateCopy.starRate = payload.rating;
	stateCopy.price = payload.price;
	stateCopy.checkbox = payload.in_menu;
	stateCopy.editID = payload.id;
	stateCopy.breed = payload.breed;
	return stateCopy;
};
const setProductDetail=(state, payload)=>{
	let stateCopy = state
	stateCopy = payload
	return stateCopy
}

const switchProductDetail=(state)=>{
let stateCopy = state
stateCopy = !state
return stateCopy
}

const logginIn=(state, userData)=>{
let loginCopy = {...state, };
return loginCopy
}
const logout=()=>{
localStorage.clear();
}
const addingToCart=(state, product)=>{
let stateCopy = [...state]
stateCopy.push(product)
return stateCopy
}
const cartSuccess=(state)=>{
	let stateCopy = state
    stateCopy = !stateCopy
    return stateCopy
}
const toggleMenu=(state)=>{
	let stateCopy = state
	stateCopy = !stateCopy
	return stateCopy 
}
const addAllCustomers=(state, data)=>{
	let stateCopy = state
	stateCopy = [...data]
	return stateCopy

}
const removeFromCart=(state, itemRemID)=>{
	let cartItems = state.cartItems.map(item=>{
		if (item.id !== itemRemID){
			return item
		}
		return null
	}).filter(function (el) {
 	 return el != null;
	});

	return cartItems
}

const ActiveReview=(state)=>{
	let stateCopy = state
	stateCopy = !stateCopy
 
	return stateCopy
}
const addReviewToUserAndProduct=(state, review)=>{
	let stateCopy = {...state}
	let newReview = {}
	newReview.content = review.payload.content
	newReview.id = review.payload.id
	newReview.product = review.payload.product
	newReview.product_id = review.payload.product_id
	newReview.title = review.payload.title
	newReview.user_id = review.payload.user_id
	const existingCheck=(userCopy,newReview)=>{
	  let userData = userCopy.reviews.filter(review=> 
	  	review.product_id !== newReview.product_id)
	  userData.push(newReview)
      return userData
	} 
    let reviewsArray = existingCheck(stateCopy.userData, newReview)
	stateCopy.userData.reviews = reviewsArray
	stateCopy.productData.filter(prod=> prod.id === newReview.product_id)[0].reviews.push(newReview)
	return stateCopy
}


function reducer( state = initialState , action){
	switch(action.type){
		case CLEAR_ALL_FIELDS:
			return {...state, productForm: {
				breed: "",
				productTitle: "",
				description: "",
				price: 0.00,
				imageURL: "",
				starRate: 0,
				checkbox: true,
				editID: 0,
			} }
		case EMPLOYEE_FORM_INPUT:
		let employeeUpdate = formObjectCreator("employeeForm", action.payload, state)
		return {...state, employeeForm: employeeUpdate}
		
		case ADD_REVIEW_DATA_TO_USER_STATE:
        let updatedState = addReviewToUserAndProduct(state, action)
		return {...updatedState}
		case REVIEW_ACTIVE:
		let activateReview = ActiveReview(state.reviewActive)
		return {...state, reviewActive: activateReview}
		case REMOVE_FROM_CART:
		let removeItem = removeFromCart(state, action.payload)
        return {...state, cartItems: removeItem }
		case LOGOUT:
		logout()
		return {...state, loggedIn: false, userData:{},activeOption: "", activeLink: "Your Account", login: {username:"",password:""}}			
 		case ALL_CUSTOMERS:
 		let allCustData = addAllCustomers(state.allCustomersData, action.payload)
 		return {...state, allCustomersData: allCustData}
 		case CLOSE_SUCCESS_WINDOW:
 		let successClose = cartSuccess(state.cartSuccess)
 		return {...state, cartSuccess: successClose}
 		case TOGGLE_MENU:
		 let toggle = toggleMenu(state.menuOpen)
 		return {...state,  menuOpen: toggle}
 		case ADD_TO_CART:
 		let addToCart = addingToCart(state.cartItems, action.payload)
 		let success = cartSuccess(state.cartSuccess)
 		return {...state, cartItems: addToCart, cartSuccess:success}
 		case BACKSWITCH_PRODUCT_DETAIL:
 		let displaySwitch = switchProductDetail(state.showProductDetail)
 		let productDetail = setProductDetail(state.activeProductDetail, action.payload)
 		return {...state, showProductDetail: displaySwitch, activeProductDetail: productDetail}
		case SEARCH_TERM_CONTROL:
		return {...state, searchTerm: action.payload}
		case REMOVE_BY_ID:
		let removedProductByID = removeById(state.productData, action.payload)
		return {...state, productData: removedProductByID }
	    case CLEAR_PRODUCT_ID:
	    //set current form id to 0
	    let setFormIDtoZero = setCurrentFormIDtoZero(state.productForm)
	    return {...state, productForm: setFormIDtoZero}
		
		case SUBMIT_PRODUCT_FORM:
		let updatedProductData = addProductToProductArray(state.productData, action.payload)

		return {...state, productData: updatedProductData }

		case PRODUCT_FOR_EDIT:
        let productFormEdit = sendProductToEdit(state.productForm, action.payload)
		return {...state, productForm: productFormEdit }
		case WEEKLY_CHECKBOX:
        let weeklyUpdate = weeklyCheckBoxBool(state.productForm)
		return {...state, productForm: weeklyUpdate }
		case STAR_RATE:
        let starUpdate = starRateInsert(state.productForm, action.payload)
		return {...state, productForm: starUpdate }

		case SOME_OPTION: //Used for navigation
		return {...state, activeOption: action.payload}
		case SOME_LINK: //Used for navigation
		return {...state, activeLink: action.payload}
       
		case PRODUCT_FORM_CONTROL:
		let productUpdate = formObjectCreator("productForm", action.payload, state)
		return {...state, productForm: productUpdate}
		case LOGIN_FORM_CONTROL:
		let loginUpdate = formObjectCreator("login", action.payload, state)
		return {...state, login: loginUpdate}
		case REVIEW_FORM_CONTROL:
		let reviewUpdate = formObjectCreator("editReviewForm", action.payload, state)
		return {...state,  editReviewForm: reviewUpdate}
		case REGISTER_FORM_CONTROL:
		let registerUpdate = formObjectCreator("form", action.payload, state)
		return {...state, form: registerUpdate}
		case ADD_USER_DATA_TO_STATE:	
		return {...state, loggedIn: true, userData: action.payload}
		case ADD_PRODUCT_DATA_TO_STATE:
		return {...state, productData: action.payload}


		default:
		return state
	}	
}

export default reducer;