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
		const objKey = Object.keys(action.payload)[0];
		const formObject = {...state.form, [objKey]:action.payload[objKey]}
		//Creates a new form state object based on incoming data object, 
		//works for all fields
		//of the RegisterForm.js based on their name and the value.
		return {...state,  form: formObject }
		
		default:
		return state
	}	
}

export default reducer;