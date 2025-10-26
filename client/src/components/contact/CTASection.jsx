import '../../css/cta.css';

function CTASection() {
  return (
    <section className="ctaContainer">
      <h2>Ready to Invest in Thessaloniki?</h2>
      <p>Contact us today and let’s find the perfect property for you!</p>
      <div className="ctaButtons">
        <a href="/contact" className="ctaBtn">Contact Us</a>
        <a href="https://wa.me/+972534273529" target="_blank" className="ctaBtn whatsapp">WhatsApp</a>
      </div>
    </section>
  );
}

export default CTASection;
