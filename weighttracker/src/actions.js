export const Action = Object.freeze({
    LoadEntries: 'LoadEntries',
});

export function loadEntries(entries){
    return{
        type: Action.LoadEntries,
        payload: entries,
    };
}
function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = "https://project2.basementjj.me:8442";

export function loadDay(month, day){
    return dispatch => {
        fetch(`${host}/track/${month}/${day}`)
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