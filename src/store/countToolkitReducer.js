import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    counter: 0
}

export const addCounter = createAction("addCounter");

export const addTimedOut = (value) => {
    return (dispatch) => {
        setTimeout( () => {
            dispatch(addCounter(value));
        }, 1500)
    }
}

export const countToolkitReducer = createReducer( initialState, (builder) => {
    builder
        .addCase(addCounter, (state, action) => {
            state.counter += action.payload;
        });
})