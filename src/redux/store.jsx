import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});


export default Store;