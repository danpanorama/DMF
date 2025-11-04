import "../../../css/productPage.css";
import { useDispatch } from "react-redux";
import { setError, clearError } from "../../../redux/actions/errorActions";
import useFormHandler from "../../common/FormHandler";
import api from "../../../config/axiosConfig";

function ContactForm() {
  const dispatch = useDispatch();
  
  const { values, handleChange, handleSubmit, loading, FeedbackComponent } = useFormHandler({
    initialValues: { name: "", email: "", phone: "", message: "" },
    onSubmit: async (data) => {
      try {
        dispatch(clearError());
        const res = await api.post("/contact", data);
        console.log("Message sent:", res.data.message);
      } catch (err) {
        const msg = err.response?.data?.message || "Failed to send your message.";
        dispatch(setError("Contact Error", msg));
        throw new Error(msg);
      }
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
