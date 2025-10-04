import { configureStore } from "@reduxjs/toolkit";
import { reviewsReducer } from "./reducers/reviewsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { errorReducer } from "./reducers/errorReducer";
import { scheduleReducer } from './reducers/scheduleReducer';

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    loader: loaderReducer,
    error: errorReducer,
    schedule: scheduleReducer,
  },
  // אין צורך ב-thunk – Redux Toolkit כולל אותו כברירת מחדל
});

export default store;
