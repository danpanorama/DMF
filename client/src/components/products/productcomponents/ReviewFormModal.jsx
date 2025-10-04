import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../common/Modal";
import GlobalButton from "../../buttons/GlobalButton";
import { addReview } from "../../../redux/actions/reviewsActions";

function ReviewFormModal({ isOpen, onClose, productId }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ user: "", rating: "", comment: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.comment) return alert("Please fill all fields");
    dispatch(addReview({ ...form, productId }));
    onClose();
  };

  return (
    <Modal title="Leave a Review" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Your name"
          value={form.user}
          onChange={handleChange}
        />
        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value="">Rating</option>
          {[5,4,3,2,1].map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <textarea
          name="comment"
          placeholder="Write your review..."
          value={form.comment}
          onChange={handleChange}
        ></textarea>
        <GlobalButton label="Submit" type="submit" variant="primary" />
      </form>
    </Modal>
  );
}

export default ReviewFormModal;
