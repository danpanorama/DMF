import { SCHEDULE_FETCH_SUCCESS, SCHEDULE_ADD_SUCCESS } from "../constants/scheduleConstants";

const initialState = {
  availableDates: [],
  scheduled: [],
};

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHEDULE_FETCH_SUCCESS:
      return { ...state, availableDates: action.payload };
    case SCHEDULE_ADD_SUCCESS:
      return { ...state, scheduled: [...state.scheduled, action.payload] };
    default:
      return state;
  }
};
