import testimonials from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="grid">
        {testimonials.map((t) => (
          <div key={t.id} className="review-card">
            <p>"{t.review}"</p>
            <h4>{t.name}</h4>
            <div>{"⭐".repeat(t.stars)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
