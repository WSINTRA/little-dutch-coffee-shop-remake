//reducer
import initialState from './state.js';

const PRODUCT_FOR_EDIT = "PRODUCT_FOR_EDIT";
const WEEKLY_CHECKBOX = "WEEKLY_CHECKBOX";
const STAR_RATE = "STAR_RATE";
const SOME_OPTION = "SOME_OPTION";
const SOME_LINK = "SOME_LINK";
const ADD_LOGIN_BOOL = "ADD_LOGIN_BOOL";
const PRODUCT_FORM_CONTROL = "PRODUCT_FORM_CONTROL";
const LOGIN_FORM_CONTROL = "LOGIN_FORM_CONTROL";
const REGISTER_FORM_CONTROL = "REGISTER_FORM_CONTROL";
const ADD_USER_DATA_TO_STATE = "ADD_USER_DATA_TO_STATE";
const ADD_PRODUCT_DATA_TO_STATE = "ADD_PRODUCT_DATA_TO_STATE";
const SUBMIT_PRODUCT_FORM = "SUBMIT_PRODUCT_FORM";
const CLEAR_PRODUCT_ID = "CLEAR_PRODUCT_ID";
const REMOVE_BY_ID = "REMOVE_BY_ID";
const SEARCH_TERM_CONTROL = "SEARCH_TERM_CONTROL";
const URL_PATH = "URL_PATH";

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
	stateCopy.editID = payload.id
	return stateCopy;
};


function reducer( state = initialState , action){
	switch(action.type){
		
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
        case ADD_LOGIN_BOOL:
        return {...state, loggedIn: action.payload}

		case PRODUCT_FORM_CONTROL:
		let productUpdate = formObjectCreator("productForm", action.payload, state)
		return {...state, productForm: productUpdate}
		case LOGIN_FORM_CONTROL:
		let loginUpdate = formObjectCreator("login", action.payload, state)
		return {...state, login: loginUpdate}
		case REGISTER_FORM_CONTROL:
		let registerUpdate = formObjectCreator("form", action.payload, state)
		return {...state, form: registerUpdate}
		case ADD_USER_DATA_TO_STATE:
		return {...state, userData: action.payload}
		case ADD_PRODUCT_DATA_TO_STATE:
		return {...state, productData: action.payload}


		default:
		return state
	}	
}

export default reducer;