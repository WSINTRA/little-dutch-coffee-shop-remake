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
 }
}

const formObjectCreator=(formType, payload, state)=>{
	let objKey = Object.keys(payload)[0];
	let formObject = {...state[formType], [objKey]:payload[objKey]}
	//creates a controlled field based on incoming payload input field name
    return formObject
}

function reducer( state = initialState , action){
let objKey,formObject

	switch(action.type){
        case "ADD_LOGIN_BOOL":
        return {...state, loggedIn: action.payload}
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