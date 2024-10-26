import React from "react";
import spinnerImage from "../assets/cryptoImage.png"; 

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <img
        src={spinnerImage}
        alt="Loading..."
        className="animate-spin h-16 w-16"
      />
    </div>
  );
};

export default LoadingSpinner;
