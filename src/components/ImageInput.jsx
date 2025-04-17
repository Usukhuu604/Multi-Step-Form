import React, { useState, useRef } from "react";
import Image from "next/legacy/image";

export const ImageInput = ({ type, name, setFormValues, error }) => {
  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = Array.from(event.target.files)[0];
    if (file) {
      setPreviewLink(URL.createObjectURL(file));
      setFormValues((prev) => ({ ...prev, [name]: file }));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    //ADDED statement
    if (file) {
      setPreviewLink(URL.createObjectURL(file));
      setFormValues((prev) => ({ ...prev, [name]: file }));
    }
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const clearImage = () => {
    setPreviewLink("");
    inputImageRef.current.value = null;
    setFormValues((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <div className="w-full space-y-2">
      <input
        ref={inputImageRef}
        name={name}
        type={type}
        hidden
        onChange={handleImageChange}
        accept=".jpg, .jpeg, .png"
      />

      {error && <p className="text-red-600">{error}</p>}

      {previewLink && (
        <div className="relative w-fit">
          <Image
            src={previewLink}
            width={350}
            height={350}
            alt="Preview"
            className="rounded-md"
          />
          <button
            type="button"
            onClick={clearImage}
            className="absolute top-[5px] right-[5px] bg-black rounded-full px-1 py-1 text-[10px]"
          >
            ❌
          </button>
        </div>
      )}

      {!previewLink && (
        <div
          className={`flex items-center justify-center bg-gray-100 w-full h-50 rounded-md border-dashed border-3 mb-5 ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"
          }`}
          onClick={openBrowse}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {previewLink
            ? "Click to change image"
            : "Click or drag an image here"}
        </div>
      )}
    </div>
  );
};
