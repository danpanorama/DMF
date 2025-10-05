// src/components/common/FormHandler.jsx
import { useState } from "react";
import FormFeedback from "./FormFeedback";

export default function useFormHandler({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { message, type }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      await onSubmit(values);
      setFeedback({ message: "Submitted successfully!", type: "success" });
      setValues(initialValues); // optional reset
    } catch (err) {
      setFeedback({ message: err.message || "Something went wrong.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const FeedbackComponent = feedback ? (
    <FormFeedback
      message={feedback.message}
      type={feedback.type}
      onClose={() => setFeedback(null)}
    />
  ) : null;

  return {
    values,
    handleChange,
    handleSubmit,
    loading,
    FeedbackComponent,
    setValues,
    setFeedback,
  };
}
