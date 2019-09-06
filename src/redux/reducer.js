//reducer

const initialState = {

}


function reducer( state = initialState , action){

	switch(action.type){
		case "ADD_DATA_TO_STATE":
		return {...state, categories: action.payload}
	
		default:
		return state
	}	
}

export default reducer;