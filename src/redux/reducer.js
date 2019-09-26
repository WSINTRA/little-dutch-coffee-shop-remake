//reducer

const initialState = {
 loggedIn: false,
 userData: [],
 form: {
 	email: "",
 	username: "",
 	password: "",
 	confirmPassword: "",
 	address: "",
 	state: "",
 	city: "",
 	zipCode: "",
 },
 login: {
 	username:"",
 	password:"",

 },
 productForm: {
 	productTitle: "",
 	description: "",
 	price: 0,
 	imageURL: "",
 	starRate: 0,
 	checkbox: true,
 },
 activeLink: "Your Account",
 activeOption: "",
}

const formObjectCreator=(formType, payload, state)=>{
	let objKey = Object.keys(payload)[0];
	let formObject = {...state[formType], [objKey]:payload[objKey]}
	//creates a controlled field based on incoming payload input field name
    return formObject
}

const starRateInsert=(state, payload )=>{
	let copy = {...state}
    copy.starRate = payload
    return copy
}
const weeklyCheckBoxBool=(state )=>{
	let copy = {...state}
    copy.checkbox = !copy.checkbox
    return copy
}

function reducer( state = initialState , action){
let objKey,formObject

	switch(action.type){
		case "WEEKLY_CHECKBOX":
        let weeklyUpdate = weeklyCheckBoxBool(state.productForm)
		return {...state, productForm: weeklyUpdate }
		case "STAR_RATE":
        let starUpdate = starRateInsert(state.productForm, action.payload)
		return {...state, productForm: starUpdate }

		case "SOME_OPTION": //Used for navigation
		return {...state, activeOption: action.payload}
		case "SOME_LINK": //Used for navigation
		return {...state, activeLink: action.payload}
        case "ADD_LOGIN_BOOL":
        return {...state, loggedIn: action.payload}

		case "PRODUCT_FORM_CONTROL":
		let productUpdate = formObjectCreator("productForm", action.payload, state)
		return {...state, productForm: productUpdate}
		case "LOGIN_FORM_CONTROL":
		let loginUpdate = formObjectCreator("login", action.payload, state)
		return {...state, login: loginUpdate}
		case "REGISTER_FORM_CONTROL":
		let registerUpdate = formObjectCreator("form", action.payload, state)
		return {...state, form: registerUpdate}
		case "ADD_USER_DATA_TO_STATE":

		return {...state, userData: action.payload}

		default:
		return state
	}	
}

export default reducer;