import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch(fethcUsers());
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch(fethcUsersSuccess(response.data));
        } catch (e) {
            dispatch(fethcUsersError(e.message));
        }
    }
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {
        fethcUsers (state) {
            state.isLoading = true;
        },
        fethcUsersSuccess (state, action ) {
            state.isLoading = false;
            state.users.push(action.payload);
        },
        fethcUsersError (state, action) {
            state.error = action.payload;
            state.isLoading = false
        }
    }
})

export default userSlice.reducer;
export const {fethcUsers,fethcUsersSuccess,fethcUsersError} = userSlice.actions;
