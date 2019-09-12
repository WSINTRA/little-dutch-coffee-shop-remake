//reducer

const initialState = {
 form: {
 	email: "test",
 	username: "",
 	password: "",
 	confirmPassword: "",
 	address: "",
 	state: "",
 	city: "",
 	zipCode: "",
 }
}


function reducer( state = initialState , action){

	switch(action.type){
		case "FORM_CONTROL":
		return {...state, form: action.payload}
		default:
		return state
	}	
}

export default reducer;