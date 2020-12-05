const initialState = {
    isWaiting: false,
    weights: [
        
            {id: 3, year: 2020, month: 4, day: 7, currentWeight: 160, goal: 150, message: "Still..."},
            {id: 2, year: 2019, month: 4, day: 7, currentWeight: 170, goal: 160, message: "Still struggling"},
            {id: 1, year: 2017, month: 4, day: 7, currentWeight: 180, goal: 170, message: "Struggling..."},
    ]
}

function reducer(state = initialState, action) {
    return state;
}

export default reducer;