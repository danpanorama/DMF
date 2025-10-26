// // src/config/axiosConfig.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   timeout: 10000, // 10 שניות
// });

// // ✅ Interceptor לשגיאות גלובליות
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const errMsg =
//       error.response?.data?.message ||
//       error.message ||
//       "Unknown server error occurred.";
//     return Promise.reject(new Error(errMsg));
//   }
// );

// export default api;





// src/config/axiosConfig.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://dmf-7zpg.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Interceptor לשגיאות גלובליות – שומר על ה־response המקורי
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // אפשר להוסיף כאן לוגינג או התראות גלובליות
    console.error("Axios error:", error.response || error.message);

    // לא משנה את ה־error, פשוט מחזיר reject כמו שהוא
    return Promise.reject(error);
  }
);

export default api;
