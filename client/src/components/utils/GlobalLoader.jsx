import React from "react";
import { useSelector } from "react-redux";
import "../../css/globalLoader.css";

const GlobalLoader = () => {
  const loading = useSelector((state) => state.loader.loading);

  if (!loading) return null;

  return (
    <div className="loaderOverlay">
      <div className="loaderSpinner"></div>
    </div>
  );
};

export default GlobalLoader;
