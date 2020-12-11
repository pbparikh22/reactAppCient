export const Action = Object.freeze({

    LoadWeights: 'LoadWeights',
})

export function loadWeights(weights) {
    return{
        type: Action.LoadWeights,
        payload: weights,
    };
}


function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = "http://project2.basementjj.me:9000/track/4/7";

export function loadDay(month, day) {
    return dispatch => {
        fetch(`${host}/weights/${month}/${day}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                dispatch(loadWeights(data.weights));
            }
        })
        .catch(e => console.error(e));
    };
    
}
