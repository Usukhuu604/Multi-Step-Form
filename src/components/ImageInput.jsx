import React, { useState, useRef } from "react";
import Image from "next/image";

export const ImageInput = ({ label, type, name, setFormValues }) => {
  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = Array.from(event.target.files)[0];
    console.log();
    if (file) {
      setPreviewLink(URL.createObjectURL(file));
    }
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

  const clearImage = () => {
    setPreviewLink("");
    inputImageRef.current.value = "";
  };
  return (
    <div className="">
      <input
        ref={inputImageRef}
        type={type}
        hidden
        onChange={handleImageChange}
      />

      <Image
        src={previewLink}
        name={name}
        width={200}
        height={150}
        alt="zurag"
      />
      <button
        className="bg-black border rounded-full text-[12px] text-justify relative "
        onClick={clearImage}
      >
        ❌
      </button>
      <div
        className={`bg-gray-200 w-full h-30 rounded-md border ${
          isDragging ? "border-red-500" : "border-grey-300"
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
};
