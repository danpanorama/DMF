import "../../../css/productPage.css";
function Reviews({ reviews }) {
  return (
    <div className="pp-reviews">
      {reviews.map((r, idx) => (
        <div key={idx} className="pp-review">
          <strong>{r.user}</strong>
          <span> - {r.rating}⭐</span>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
