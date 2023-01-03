import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../feacture/theme'


const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

export default store