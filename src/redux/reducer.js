//reducer

const initialState = {

}


function reducer( state = initialState , action){

	switch(action.type){
		case "":
		return {...state}
	
		default:
		return state
	}	
}

export default reducer;