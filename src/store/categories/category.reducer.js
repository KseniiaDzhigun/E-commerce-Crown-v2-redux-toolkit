import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
}

export const categoriesSlice = createSlice({
    // the same as user/ in SET_CURRENT_USER: 'user/SET_CURRENT_USER'
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        // shortcut for setCurrentUser: () => {},
        setCategories(state, action) {
            state.categories = action.payload;
        }
    }
})

export const {setCategories} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;