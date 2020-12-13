export const Action = Object.freeze({
    LoadEntries: 'LoadEntries',
    FinishAddingEntry: 'FinishAddingEntry',
    EnterEditMode: 'EnterEditMode',
    LeaveEditMode: 'LeaveEditMode',
    FinishSavingEntry: 'FinishSavingEntry',
    FinishDeletingEntry: 'FinishDeletingEntry',

});

export function loadEntries(entries){
    return{
        type: Action.LoadEntries,
        payload: entries,
    };
}

export function finishAddingEntry(entry){
    return{
        type: Action.FinishAddingEntry,
        payload: entry,
    };
}
export function finishSavingEntry(entry){
    return{
        type: Action.FinishSavingEntry,
        payload: entry,
    };
}

export function finishDeletingEntry(entry){
    return{
        type: Action.FinishDeletingEntry,
        payload: entry,
    };
}

export function enterEditMode(entry){
    return{
        type: Action.EnterEditMode,
        payload: entry,
    };
}

export function leaveEditMode(entry){
    return{
        type: Action.LeaveEditMode,
        payload: entry,
    };
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = "https://project2.basementjj.me:8442";

export function loadDay(month) {
    return dispatch => {
        fetch(`${host}/track/${month}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                dispatch(loadEntries(data.memories));
            }
        })
        .catch(e => console.error(e));
    };
}

export function startAddingEntry(year, month, day) {
    const entry = { year, month, day, message: ''};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
    }
    return dispatch => {
        fetch(`${host}/track`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                entry.id = data.id;
                dispatch(finishAddingEntry(entry));
            }
        })
        .catch(e => console.error(e));
    };
}

export function startSavingEntry(entry) {
    
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
    }
    return dispatch => {
        fetch(`${host}/track/${entry.id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {                
                dispatch(finishSavingEntry(entry));
            }
        })
        .catch(e => console.error(e));
    };
}

export function startDeletingEntry(entry) {
    
    const options = {
        method: 'DELETE',
    };
    return dispatch => {
        fetch(`${host}/track/${entry.id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {                
                dispatch(finishDeletingEntry(entry));
            }
        })
        .catch(e => console.error(e));
    };
}