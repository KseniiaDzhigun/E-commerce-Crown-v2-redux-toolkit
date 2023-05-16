import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
}

export const userSlice = createSlice({
    // the same as user/ in SET_CURRENT_USER: 'user/SET_CURRENT_USER'
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        // shortcut for setCurrentUser: () => {},
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        }
    }
})

export const {setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;