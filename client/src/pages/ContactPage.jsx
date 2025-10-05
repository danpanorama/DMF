import React from "react";
import "../css/contactPage.css";
import ContactForm from "../components/products/productcomponents/ContactForm";
import CTASection from "../components/contact/CTASection";
import ProductMap from "../components/products/ProductMap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  const officeInfo = {
    phone: "+30 123 456 789",
    email: "info@dmf.com",
    address: "123 Thessaloniki Street, Thessaloniki, Greece",
  };

  return (
    <main className="contactPageContainer">
      {/* Hero Section */}
     <section className="contactHero flexCenter">
  <div className="heroGrid">
    {/* Left Column */}
    <div className="heroLeft">
      <h1>Contact DMF</h1>
      <p>Your trusted partner for real estate investments in Thessaloniki.</p>
      
      <div className="socialIconsHero">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </div>

    {/* Right Column */}
    <div className="heroRight">
      <div className="contactInfo">
        <div className="infoItem">
          <FaEnvelope /> <a href={`mailto:${officeInfo.email}`}>{officeInfo.email}</a>
        </div>
        <div className="infoItem">
          <FaPhone /> <a href={`tel:${officeInfo.phone}`}>{officeInfo.phone}</a>
        </div>
        <div className="infoItem">
          <FaMapMarkerAlt /> {officeInfo.address}
        </div>
      </div>

      <ProductMap address={officeInfo.address} />
    </div>
  </div>
</section>


      {/* Form Section */}
      <section className="contactFormSection flexCenter">
        <div className="formWrapper">
          <h2>Send us a Message</h2>
          <p>Fill the form below and we’ll get back to you as soon as possible.</p>
          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}

export default ContactPage;
