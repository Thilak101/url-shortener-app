import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../slices/UserSlice";

const store = configureStore({
    reducer: {
        userInfo: useReducer
    }
})

export default store