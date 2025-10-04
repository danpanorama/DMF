import { ERROR_SET, ERROR_CLEAR } from "../constants/errorConstants";

const initialState = {
  hasError: false,
  title: "",
  description: "",
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_SET:
      return {
        hasError: true,
        title: action.payload.title || "Error",
        description: action.payload.description || "An unexpected error occurred.",
      };
    case ERROR_CLEAR:
      return initialState;
    default:
      return state;
  }
};
