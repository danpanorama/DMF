import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAIL,
  REVIEW_ADD_REQUEST,
  REVIEW_ADD_SUCCESS,
  REVIEW_ADD_FAIL,
  REVIEW_DELETE_REQUEST,
  REVIEW_DELETE_SUCCESS,
  REVIEW_DELETE_FAIL,
} from "../constants/reviewsConstants";

import { setError } from "./errorActions";
import { showLoader, hideLoader } from "./loaderActions";

// שליפה
export const fetchReviews = (productId) => async (dispatch) => {
  try {
    dispatch(showLoader());
    dispatch({ type: REVIEWS_FETCH_REQUEST });

    // API מדומה
    const data = [
      { user: "Alice", rating: 5, comment: "Great location and modern apartment!", productId: 1, id: 1 },
      { user: "Bob", rating: 4, comment: "Spacious rooms, very clean.", productId: 1, id: 2 },
    ];

    // מחזיר רק את התגובות של המוצר הנוכחי
    dispatch({ type: REVIEWS_FETCH_SUCCESS, payload: data.filter(r => r.productId === productId) });
  } catch (error) {
    dispatch({ type: REVIEWS_FETCH_FAIL, payload: error.message });
    dispatch(setError("Error Loading Reviews", error.message));
  } finally {
    dispatch(hideLoader());
  }
};

// הוספה
// export const addReview = (review) => async (dispatch) => {
//   try {
//     dispatch(showLoader());
//     dispatch({ type: REVIEW_ADD_REQUEST });

//     const res = await fetch(`/api/reviews`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(review),
//     });

//     if (!res.ok) throw new Error("Failed to add review");

//     const data = await res.json();

//     dispatch({ type: REVIEW_ADD_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: REVIEW_ADD_FAIL, payload: error.message });
//     dispatch(setError("Error Adding Review", error.message));
//   } finally {
//     dispatch(hideLoader());
//   }
// };

// הוספה (mock)
export const addReview = (review) => async (dispatch) => {
  try {
    dispatch(showLoader());
    dispatch({ type: REVIEW_ADD_REQUEST });

    // סימולציה של קריאה לשרת עם setTimeout
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        // מחזיר את אותו review עם id אקראי
        resolve({ ...review, id: Date.now() });
      }, 500); // 0.5 שניות "טעינה"
    });

    dispatch({ type: REVIEW_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEW_ADD_FAIL, payload: error.message });
    dispatch(setError("Error Adding Review", error.message));
  } finally {
    dispatch(hideLoader());
  }
};


// מחיקה
export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    dispatch(showLoader());
    dispatch({ type: REVIEW_DELETE_REQUEST });

    const res = await fetch(`/api/reviews/${reviewId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete review");

    dispatch({ type: REVIEW_DELETE_SUCCESS, payload: reviewId });
  } catch (error) {
    dispatch({ type: REVIEW_DELETE_FAIL, payload: error.message });
    dispatch(setError("Error Deleting Review", error.message));
  } finally {
    dispatch(hideLoader());
  }
};
