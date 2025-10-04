import { SCHEDULE_FETCH_SUCCESS, SCHEDULE_ADD_SUCCESS } from "../constants/scheduleConstants";
import { showLoader, hideLoader } from "./loaderActions";
import { setError } from "./errorActions";

// דוגמה של זמינים מהשרת
const notavailableDates = [
  { date: "2025-10-10", times: ["10:00", "12:00", "14:00"] },
  { date: "2025-10-11", times: ["09:00", "11:00", "13:00"] },


];

// שליפה
export const fetchAvailableDates = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    // כאן יהיה קריאה אמיתית לשרת
    const data = await new Promise((res) => setTimeout(() => res(notavailableDates), 500));
    dispatch({ type: SCHEDULE_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch(setError("Failed to fetch dates", error.message));
  } finally {
    dispatch(hideLoader());
  }
};

// הוספת פגישה
// export const addSchedule = (schedule) => async (dispatch) => {
//   try {
//     dispatch(showLoader());
//     // כאן יהיה קריאה אמיתית לשרת
//     const newSchedule = await new Promise((res, rej) =>
//       setTimeout(() => {
//         // לדוגמה: אם הזמן תפוס, תזרוק שגיאה
//         const conflict = false; // אפשר לשנות ל־true לבדיקה
//         conflict ? rej(new Error("Time slot unavailable")) : res(schedule);
//       }, 500)
//     );

//     dispatch({ type: SCHEDULE_ADD_SUCCESS, payload: newSchedule });
//   } catch (error) {
//     dispatch(setError("Failed to schedule visit", error.message));
//   } finally {
//     dispatch(hideLoader());
//   }
// };


export const addSchedule = (schedule) => async (dispatch, getState) => {
  try {
    dispatch(showLoader());
    const { scheduled } = getState().schedule;

    // בדיקה אם הזמן תפוס
    const conflict = scheduled.some(
      s => s.date === schedule.date && s.time === schedule.time
    );

    if (conflict) throw new Error("Time slot unavailable");

    // הוספה
    dispatch({ type: SCHEDULE_ADD_SUCCESS, payload: schedule });
  } catch (error) {
    dispatch(setError("Failed to schedule visit", error.message));
  } finally {
    dispatch(hideLoader());
  }
};
