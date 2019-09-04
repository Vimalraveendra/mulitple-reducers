const initialState={
	a:1
}


const ReducerB = (state=initialState, action)=>{
	const newState= {...state}
		switch(action.type){
		case 'UPDATE_A':
		return{...newState,
		a:newState.a + action.value
	}
	default:
	return newState;
	}
   
}


export default ReducerB;