import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./userAction";
import { remove } from "../../../utils/reusable";

const initialState = {
  loading: false,
  userInfo: {},
  accessToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      remove("accessToken");
      remove("refreshToken");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.accessToken = payload.accessToken;
      state.userInfo = payload.user;
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });

    // Register
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.accessToken = payload.accessToken;
      state.userInfo = payload.user;
      state.success = true;
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    });
  },
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;
