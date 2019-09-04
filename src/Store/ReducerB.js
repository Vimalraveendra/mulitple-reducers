const initialState={
	b:1
}


const ReducerA = (state=initialState, action)=>{
	const newState= {...state}
		switch(action.type){
		case 'UPDATE_B':
		return{...newState,
		b:action.value + newState.b
	}
	default:
	return newState;
	}
   
}


export default ReducerA;