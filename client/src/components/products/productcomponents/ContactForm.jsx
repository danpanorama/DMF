



// import "../../../css/productPage.css";
// import { useState } from "react";

// function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

//   const handleChange = e => setForm({...form, [e.target.name]: e.target.value});
//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("Message sent!");
//     // כאן אפשר גם לשלוח לשרת עם axios או fetch
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
import useFormHandler from "../../common/FormHandler";

function ContactForm() {
  const { values, handleChange, handleSubmit, loading, FeedbackComponent } = useFormHandler({
    initialValues: { name: "", email: "", phone: "", message: "" },
    onSubmit: async (data) => {
      console.log("Send to server:", data);
      await new Promise((res) => setTimeout(res, 500)); // simulate server
    },
  });

  return (
    <form className="pp-contact-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={values.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={values.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={values.message} onChange={handleChange} required />
      <button type="submit" className="pp-btn" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {FeedbackComponent}
    </form>
  );
}

export default ContactForm;
