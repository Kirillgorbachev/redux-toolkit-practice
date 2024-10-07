import { combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { countToolkitReducer } from "./countToolkitReducer";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
    count: countReducer,
    counter: countToolkitReducer,
    users: userSlice
})

export const store = configureStore({reducer: rootReducer});