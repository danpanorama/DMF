

// import "../../css/footer.css";
// import useFormHandler from "../common/FormHandler";

// function Footer() {
//   const { values, handleChange, handleSubmit, loading, FeedbackComponent } = useFormHandler({
//     initialValues: { name: "", email: "", message: "" },
//     onSubmit: async (data) => {
//       console.log("Send to server:", data);
//       await new Promise((res) => setTimeout(res, 500)); // סימולציה של שליחה לשרת
//     },
//   });

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
//             value={values.name} 
//             onChange={handleChange} 
//             required 
//           />
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Your Email" 
//             value={values.email} 
//             onChange={handleChange} 
//             required 
//           />
//           <textarea 
//             name="message" 
//             placeholder="Your Message" 
//             value={values.message} 
//             onChange={handleChange} 
//             required 
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send"}
//           </button>
//           {FeedbackComponent}
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
import { useDispatch } from "react-redux";
import { setError, clearError } from "../../redux/actions/errorActions";
import axios from "axios";

function Footer() {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, loading, FeedbackComponent } = useFormHandler({
    initialValues: { name: "", email: "", phone: "", message: "" }, // הוספנו phone כמו בטופס הראשי
    onSubmit: async (data) => {
      try {
        dispatch(clearError());
        const res = await axios.post("/api/contact", data);
        console.log("Message sent:", res.data.message);
      } catch (err) {
        const msg = err.response?.data?.message || "Failed to send your message.";
        dispatch(setError("Contact Error", msg));
        throw new Error(msg); // כדי ש־FormHandler יציג feedback
      }
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
          <input 
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={values.phone}
            onChange={handleChange}
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
