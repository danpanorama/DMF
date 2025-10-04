




// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import ReviewFormModal from "./ReviewFormModal";
// import GlobalButton from "../../buttons/GlobalButton";
// import "../../../css/productPage.css";
// import { addReview } from "../../../redux/actions/reviewsActions";

// function Reviews({ reviews = [], productId }) {
//   const [open, setOpen] = useState(false);
//   const dispatch = useDispatch();

//   const handleAddReview = (newReview) => {
//     dispatch(addReview({ ...newReview, productId }));
//     setOpen(false);
//   };

//   return (
//     <div className="pp-reviews">
//       {reviews.map((r, idx) => (
//         <div key={idx} className="pp-review">
//           <strong>{r.user}</strong>
//           <span> - {r.rating}⭐</span>
//           <p>{r.comment}</p>
//         </div>
//       ))}

//       <div style={{ marginTop: "20px" }}>
//         <GlobalButton label="Add Review" onClick={() => setOpen(true)} />
//       </div>

//       {open && (
//         <ReviewFormModal
//           isOpen={open}
//           onClose={() => setOpen(false)}
//           productId={productId}
//         />
//       )}
//     </div>
//   );
// }

// export default Reviews;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewFormModal from "./ReviewFormModal";
import GlobalButton from "../../buttons/GlobalButton";
import "../../../css/productPage.css";
import { addReview } from "../../../redux/actions/reviewsActions";

function Reviews({ productId }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // שולפים את כל התגובות מה-Redux
  const reviewsState = useSelector((state) => state.reviews);
  const reviews = reviewsState.reviews.filter(r => r.productId === productId);

  const handleAddReview = (newReview) => {
    dispatch(addReview({ ...newReview, productId }));
    setOpen(false);
  };

  return (
    <div className="pp-reviews">
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((r, idx) => (
        <div key={idx} className="pp-review">
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
