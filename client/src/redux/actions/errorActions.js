import { ERROR_SET, ERROR_CLEAR } from "../constants/errorConstants";

export const setError = (title, description) => ({
  type: ERROR_SET,
  payload: { title, description },
});

export const clearError = () => ({
  type: ERROR_CLEAR,
});
