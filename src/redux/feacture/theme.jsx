import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'gray',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions