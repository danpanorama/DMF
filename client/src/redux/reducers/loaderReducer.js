import { LOADER_SHOW, LOADER_HIDE } from "../constants/loaderConstants";

const initialState = { loading: false };

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_SHOW:
      return { loading: true };
    case LOADER_HIDE:
      return { loading: false };
    default:
      return state;
  }
};
