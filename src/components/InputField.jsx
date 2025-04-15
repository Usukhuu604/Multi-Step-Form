import React from "react";

export const InputField = ({
  label,
  type,
  placeholder,
  handleInputChange,
  name,
  value,
}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
