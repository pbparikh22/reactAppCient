import { Action } from "./actions";


const initialState = {
    isWaiting: false,
    weights: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.LoadWeights:
            return {
                ...state,
                weights: action.payload,
            }
        default:
            return state;
    }
        
    
}

export default reducer;