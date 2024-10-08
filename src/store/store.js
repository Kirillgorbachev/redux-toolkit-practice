import { combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { countToolkitReducer } from "./countToolkitReducer";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { postAPI } from "../Services/userService";

const rootReducer = combineReducers({
    count: countReducer,
    counter: countToolkitReducer,
    users: userSlice,
    [postAPI.reducerPath]: postAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postAPI.middleware)

});