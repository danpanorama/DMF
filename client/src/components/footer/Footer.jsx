// import { useState } from "react";
// import "../../css/footer.css";

// function Footer() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("Message sent!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <footer className="footerContainer">
//       {/* לוגו */}
//       <div className="footerLogo">DMF</div>

//       {/* לינקים */}
//       <div className="footerLinks">
//         <h3>Quick Links</h3>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/products">Products</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </div>

//       {/* טופס הודעה */}
//       <div className="footerContact">
//         <h3>Send us a Message</h3>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             name="name" 
//             placeholder="Your Name" 
//             value={form.name} 
//             onChange={handleChange} 
//             required 
//           />
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Your Email" 
//             value={form.email} 
//             onChange={handleChange} 
//             required 
//           />
//           <textarea 
//             name="message" 
//             placeholder="Your Message" 
//             value={form.message} 
//             onChange={handleChange} 
//             required 
//           />
//           <button type="submit">Send</button>
//         </form>
//       </div>

//       {/* רשתות חברתיות */}
//       <div className="footerSocial">
//         <h3>Follow Us</h3>
//         <div className="socialIcons">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//           <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
//         </div>
//       </div>

//       <div className="footerCopy">
//         &copy; {new Date().getFullYear()} DMF. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;



import "../../css/footer.css";
import useFormHandler from "../common/FormHandler";

function Footer() {
  const { values, handleChange, handleSubmit, loading, FeedbackComponent } = useFormHandler({
    initialValues: { name: "", email: "", message: "" },
    onSubmit: async (data) => {
      console.log("Send to server:", data);
      await new Promise((res) => setTimeout(res, 500)); // סימולציה של שליחה לשרת
    },
  });

  return (
    <footer className="footerContainer">
      {/* לוגו */}
      <div className="footerLogo">DMF</div>

      {/* לינקים */}
      <div className="footerLinks">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* טופס הודעה */}
      <div className="footerContact">
        <h3>Send us a Message</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={values.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={values.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={values.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          {FeedbackComponent}
        </form>
      </div>

      {/* רשתות חברתיות */}
      <div className="footerSocial">
        <h3>Follow Us</h3>
        <div className="socialIcons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footerCopy">
        &copy; {new Date().getFullYear()} DMF. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
