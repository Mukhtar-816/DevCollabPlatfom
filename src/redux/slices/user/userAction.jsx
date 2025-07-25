import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axios";
import { save } from "../../../utils/reusable";

// Login Thunk
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", { email, password });

      if (data?.success) {
        save("accessToken", data.accessToken);
        save("refreshToken", data.refreshToken);
        save("user", JSON.stringify(data.user));
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Login failed");
    }
  }
);

// Register Thunk
export const userRegister = createAsyncThunk(
  "auth/signup",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/signup", {
        email,
        password,
        name,
      });

      save("accessToken", data.accessToken);
      save("refreshToken", data.refreshToken);
      // save("user", JSON.stringify(data.user));

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Sign up failed");
    }
  }
);

export const userProfile = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/user/profile");
      save("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || "Could not fetch user data"
      );
    }
  }
);
