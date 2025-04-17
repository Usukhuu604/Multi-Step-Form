import React from "react";

export const InputField = ({
  label,
  type,
  placeholder,
  handleInputChange,
  name,
  value,
  error,
}) => {
  return (
    <div>
      <label className="text-gray-700 text-sm font-bold mb-2">{label}</label>
      <span className="text-red-500">*</span>
      <div className="mb-5">
        <input
          className=" border rounded w-full py-2 px-3  "
          name={name}
          type={type}
          placeholder={placeholder}
          min="1900-01-01"
          max="2025-12-31"
          value={value}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};
