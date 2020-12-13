import {Action} from './actions';
const initialState = {
     entries: [],
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.LoadEntries:
            return{
                ...state,
                entries: action.payload,
            }
        case Action.FinishAddingEntry:
            return{
                ...state,
                 entries: [action.payload, ...state.entries],
            };
        case Action.EnterEditMode:
            return{
                ...state,
                entries: state.entries.map(entry => {
                    if (entry.id === action.payload.id) {
                        return {...entry, isEditing: true};        
                    } else {
                        return entry;
                    }
                }),
            };
        case Action.LeaveEditMode:
            return{
                ...state,
                entries: state.entries.map(entry => {
                    if (entry.id === action.payload.id) {
                        return {...entry, isEditing: undefined};        
                    } else {
                        return entry;
                    }
                }),
            };
        case Action.FinishSavingEntry:
            return{
                ...state,
                entries: state.entries.map(entry => {
                    if (entry.id === action.payload.id) {
                        return action.payload;        
                    } else {
                        return entry;
                    }
                }),
            };
        case Action.FinishDeletingEntry:
            return{
                ...state,
                entries: state.entries.filter(entry => entry.id !== action.payload.id),
            };
        default:
            return state;
        
    }
}
export default reducer;