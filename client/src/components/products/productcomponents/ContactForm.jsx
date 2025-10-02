// import "../../../css/productPage.css";
// import { useState } from "react";

// function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

//   const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("Message sent!");
//   }

//   return (
//     <form className="pp-contact-form" onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//       <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//       <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
//       <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
//       <button type="submit" className="pp-btn">Send</button>
//     </form>
//   );
// }

// export default ContactForm;



import "../../../css/productPage.css";
import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = e => {
    e.preventDefault();
    alert("Message sent!");
    // כאן אפשר גם לשלוח לשרת עם axios או fetch
  }

  return (
    <form className="pp-contact-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
      <button type="submit" className="pp-btn">Send</button>
    </form>
  );
}

export default ContactForm;
