import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    user:userReducer,
})

const Store = configureStore({
    reducer:rootReducer
})