const { createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("../../../api/axios");
const { save } = require("../../../utils/reusable");

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const { data } = await axios.post("/auth/login", { email, password });

      if (data?.success) {
        save("accessToken", data.data?.accessToken);
        save("refreshToken", data.data?.refreshToken);
        save("user", JSON.stringify(data.data?.user));
      }

      return data;
    } catch (error) {
      let err = error.message;
      console.log("Error Logging In");
      return err;
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/signup",
  async ({ email, password, name }) => {
    try {
      const { data } = await axios.post("/auth/signup", {
        email,
        password,
        name,
      });
      save("accessToken", data.data.accessToken);
      save("refreshToken", data.data.refreshToken);
      save("user", JSON.stringify(data.data.user));

      return data;
    } catch (error) {
      let err = error.message;
      console.log("Error Signing Up");
      return err;
    }
  }
);
