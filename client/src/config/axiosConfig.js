


// // src/config/axiosConfig.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "https://dmf-7zpg.onrender.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   timeout: 10000,
// });

// // Interceptor לשגיאות גלובליות – שומר על ה־response המקורי
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // אפשר להוסיף כאן לוגינג או התראות גלובליות
//     console.error("Axios error:", error.response || error.message);

//     // לא משנה את ה־error, פשוט מחזיר reject כמו שהוא
//     return Promise.reject(error);
//   }
// );

// export default api;


// src/config/axiosConfig.js
import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://dmf-7zpg.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 שניות
});

// 🟢 נסה שוב אוטומטית עד 3 פעמים
axiosRetry(api, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 2000, // 2, 4, 6 שניות
  retryCondition: (error) => {
    return (
      error.code === "ECONNABORTED" || // timeout
      !error.response ||                // אין תגובה מהשרת
      error.response.status >= 500      // שגיאת שרת
    );
  },
});

// 🧠 Interceptor לשגיאות גלובליות
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
