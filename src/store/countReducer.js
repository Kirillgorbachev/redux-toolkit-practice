const initialState = {
    count: 0
}

export const ADD_COUNT = "ADD_COUNT";

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {...state, count: state.count + action.payload}


        default:
            return state;
    }
}

export const addCount = (countNum) => ({type: ADD_COUNT, payload: countNum});