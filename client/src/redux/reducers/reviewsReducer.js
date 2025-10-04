import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAIL,
  REVIEW_ADD_REQUEST,
  REVIEW_ADD_SUCCESS,
  REVIEW_ADD_FAIL,
  REVIEW_DELETE_REQUEST,
  REVIEW_DELETE_SUCCESS,
  REVIEW_DELETE_FAIL
} from "../constants/reviewsConstants";

const initialState = {
  reviews: [


  ],
  loading: false,
  error: null,
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS_FETCH_REQUEST:
    case REVIEW_ADD_REQUEST:
    case REVIEW_DELETE_REQUEST:
      return { ...state, loading: true };

    case REVIEWS_FETCH_SUCCESS:
      return { ...state, loading: false, reviews: action.payload };

    case REVIEW_ADD_SUCCESS:
      return { ...state, loading: false, reviews: [...state.reviews, action.payload] };

    case REVIEW_DELETE_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        reviews: state.reviews.filter(r => r.id !== action.payload) 
      };

    case REVIEWS_FETCH_FAIL:
    case REVIEW_ADD_FAIL:
    case REVIEW_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
