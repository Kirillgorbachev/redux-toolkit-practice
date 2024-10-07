import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUsers = () => {
//     return async (dispatch) => {
//         try {
//             dispatch(fethcUsers());
//             const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//             dispatch(fethcUsersSuccess(response.data));
//         } catch (e) {
//             dispatch(fethcUsersError(e.message));
//         }
//     }
// }

export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users ");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка при загрузке пользователей");
        }
        
    }

)

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled.type, (state, action ) => {
                state.isLoading = false;
                state.users.push(action.payload);
            })
            .addCase(fetchUsers.rejected.type, (state, action) => {
                state.error = action.payload;
                state.isLoading = false
            })
    }
})

export default userSlice.reducer;
export const {fethcUsers,fethcUsersSuccess,fethcUsersError} = userSlice.actions;
