import '../../css/reviews.css';

function ReviewsSection() {
  const reviews = [
    { name: "Alice", text: "Amazing guidance and investment opportunities!" },
    { name: "Bob", text: "Very professional and transparent throughout." },
  ];

  return (
    <section className="reviewsContainer">
      <h2>What Our Clients Say</h2>
      <div className="reviewsGrid">
        {reviews.map((r, i) => (
          <div className="reviewCard" key={i}>
            <p>"{r.text}"</p>
            <span>- {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
