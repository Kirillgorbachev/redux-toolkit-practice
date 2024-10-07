import { combineReducers, createStore } from "redux";
import { countReducer } from "./countReducer";
import { countToolkitReducer } from "./countToolkitReducer";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { userAPI } from "../Services/userService";

const rootReducer = combineReducers({
    count: countReducer,
    counter: countToolkitReducer,
    users: userSlice,
    [userAPI.reducerPath]: userAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userAPI.middleware)

});