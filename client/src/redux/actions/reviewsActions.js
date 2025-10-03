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

// שליפה
export const fetchReviews = (productId) => async (dispatch) => {
  try {
    dispatch({ type: REVIEWS_FETCH_REQUEST });

    // כאן תשים קריאת API אמיתית
    const res = await fetch(`/api/products/${productId}/reviews`);
    const data = await res.json();

    dispatch({ type: REVIEWS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEWS_FETCH_FAIL, payload: error.message });
  }
};

// הוספה
export const addReview = (review) => async (dispatch) => {
  try {
    dispatch({ type: REVIEW_ADD_REQUEST });

    const res = await fetch(`/api/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
    const data = await res.json();

    dispatch({ type: REVIEW_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REVIEW_ADD_FAIL, payload: error.message });
  }
};

// מחיקה
export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    dispatch({ type: REVIEW_DELETE_REQUEST });

    await fetch(`/api/reviews/${reviewId}`, { method: "DELETE" });

    dispatch({ type: REVIEW_DELETE_SUCCESS, payload: reviewId });
  } catch (error) {
    dispatch({ type: REVIEW_DELETE_FAIL, payload: error.message });
  }
};
