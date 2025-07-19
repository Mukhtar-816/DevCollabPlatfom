const { createSlice } = require("@reduxjs/toolkit");
const { userLogin } = require("./userAction");
const { build } = require("vite");

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.accessToken = payload.data.accessToken;
      state.success = payload.success;
      state.userInfo = payload.data.user;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
