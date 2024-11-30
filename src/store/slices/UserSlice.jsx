import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        adduser(state,action) {
            state.push(action.payload);
        },
        deleteUser(state, action) {},
        deleteAllUsers(state, action) {}
    },
});

export default usersSlice.reducer

export const {adduser} = usersSlice.actions