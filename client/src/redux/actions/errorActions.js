import { ERROR_SET, ERROR_CLEAR } from "../constants/errorConstants";

export const setError = (message) => ({ type: ERROR_SET, payload: message });
export const clearError = () => ({ type: ERROR_CLEAR });
