// src/config/axiosConfig.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 שניות
});

// ✅ Interceptor לשגיאות גלובליות
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errMsg =
      error.response?.data?.message ||
      error.message ||
      "Unknown server error occurred.";
    return Promise.reject(new Error(errMsg));
  }
);

export default api;
