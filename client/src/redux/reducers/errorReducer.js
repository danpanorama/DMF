import { ERROR_SET, ERROR_CLEAR } from "../constants/errorConstants";

const initialState = { error: null };

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_SET:
      return { error: action.payload };
    case ERROR_CLEAR:
      return { error: null };
    default:
      return state;
  }
};
