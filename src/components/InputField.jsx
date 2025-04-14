import React from "react";

export const InputField = ({ label, type, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
