import axios from "axios";

// Base URL for backend API
export const baseUrl = "http://localhost:3000";


const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptors are axios builtin middlewares, it is used for request to check and add token in the on going request, if exists.
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken"); // localStorage is synchronous, no await needed
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // attach access token to header
    }

    return config;
  },

  (error) => Promise.reject(error)
);

// It is used here with the response to refresh token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // if token is expired and this is first retry attempt
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken"); // no need for await here

      if (refreshToken) {
        try {
          // changed to POST instead of GET because body is needed
          const res = await axiosInstance.post("/auth/RefreshAccessToken", {
            refreshToken,
          });

          if (res?.status === 201 || res?.status === 200) {
            const newAccessToken = res?.data?.accessToken;

            // update token in localStorage and header
            localStorage.setItem("accessToken", newAccessToken);
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

            // retry original failed request
            return axiosInstance(originalRequest);
          }
        } catch (refreshError) {
          console.error("Error refreshing access tokens");
          return Promise.reject(error);
        }
      }
    }

    // if no refresh token or retry failed
    return Promise.reject(error);
  }
);

export default axiosInstance;
