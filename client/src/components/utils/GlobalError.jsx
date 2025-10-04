import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../../redux/actions/errorActions";
import "../../css/globalError.css";

const GlobalError = () => {
  const dispatch = useDispatch();
  const { hasError, title, description } = useSelector(state => state.error);

  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => dispatch(clearError()), 5000);
      return () => clearTimeout(timer);
    }
  }, [hasError, dispatch]);

  if (!hasError) return null;

  return (
    <div className="errorContainer">
      <div className="errorContent">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GlobalError;
