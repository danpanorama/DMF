import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reviewsReducer } from "./reducers/reviewsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { errorReducer } from "./reducers/errorReducer";

const rootReducer = combineReducers({
  reviews: reviewsReducer,
  loader: loaderReducer,
  error: errorReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
