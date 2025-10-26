


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewFormModal from "./ReviewFormModal";
import GlobalButton from "../../buttons/GlobalButton";
import "../../../css/productPage.css";
import { addReview,deleteReview } from "../../../redux/actions/reviewsActions";
import { getDeviceId } from "../../utils/device";

function Reviews({ productId }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
const currentDevice = getDeviceId();
  // שולפים את כל התגובות מה-Redux
  const reviewsState = useSelector((state) => state.reviews);
  const reviews = reviewsState.reviews.filter(r => r.productId === productId);

  const handleAddReview = (newReview) => {
    dispatch(addReview({ ...newReview, productId }));
    setOpen(false);
  };

  const handleDelete = async (reviewId) => {
  const deviceId = getDeviceId();
  dispatch(deleteReview(reviewId, deviceId));
};


  return (
    <div className="pp-reviews">
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((r, idx) => (
        <div key={idx} className="pp-review">
             {r.deviceId === currentDevice && (
      <button onClick={() => handleDelete(r._id)}>🗑️ </button>
    )}
    <br />
          <strong>{r.user}</strong>
          <span> - {r.rating}⭐</span>
          <p>{r.comment}</p>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <GlobalButton label="Add Review" onClick={() => setOpen(true)} />
      </div>

      {open && (
        <ReviewFormModal
          isOpen={open}
          onClose={() => setOpen(false)}
          productId={productId}
        />
      )}
    </div>
  );
}

export default Reviews;
