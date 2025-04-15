import React from "react";
import { useState, useRef } from "react";
import Image from "next/legacy/image";

export const InputField = ({
  label,
  type,
  placeholder,
  handleInputChange,
  name,
  value,
}) => {
  if (name == "profileImage") {
    const inputImageRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [previewLink, setPreviewLink] = useState("");

    const openBrowse = () => {
      inputImageRef.current?.click();
    };

    const handleChange = (event) => {
      const file = Array.from(event.target.files)[0];
      setPreviewLink(URL.createObjectURL(file));
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const file = Array.from(event.dataTransfer.files)[0];
      setPreviewLink(URL.createObjectURL(file));
    };

    const handleDragOver = (event) => {
      event.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    return (
      <div className="flex justify-center items-center h-screen">
        <input ref={inputImageRef} type="file" hidden onChange={handleChange} />

        <Image src={previewLink} width={200} height={300} alt="" />

        <div
          className={`bg-gray-200 w-60 h-60 rounded-md border ${
            isDragging ? "border-red-500" : "border-yellow-300"
          }`}
          onClick={openBrowse}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          Browse or Drop Image
        </div>
      </div>
    );
  }

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
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
