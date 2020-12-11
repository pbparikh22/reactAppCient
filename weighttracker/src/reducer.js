import {Action} from './actions';
const initialState = {
     entries: [],
};


function reducer(state = initialState, action){
    switch (action.type) {
        case Action.LoadEntries:
            return{
                ...state,
                entries: action.payload,
            }
    
        default:
            return state;
        
}
}
export default reducer;