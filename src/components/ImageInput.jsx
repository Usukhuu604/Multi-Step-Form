import React from "react";
import { useState, useRef } from "react";
import Image from "next/legacy/image";

export const ImageInput = ({ label, type, name, setFormValues }) => {
  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = Array.from(event.target.files)[0];
    // console.log(event.target.files);
    if (file) {
      setPreviewLink(URL.createObjectURL(file));
      // console.log(file);
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
    inputImageRef.current.value = null;
  };
  return (
    <div className="">
      <input
        ref={inputImageRef}
        name={name}
        type={type}
        hidden
        onChange={handleImageChange}
        accept=".jpg, .jpeg, .png"
      />

      <button
        className="bg-black border rounded-full text-[12px] text-justify "
        onClick={clearImage}
      >
        ❌
      </button>
      <div
        className={`bg-gray-200 w-full h-50 rounded-md border ${
          isDragging ? "border-red-500" : "border-grey-300"
        }`}
        onClick={openBrowse}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        Add Image
        <Image
          src={previewLink}
          name={name}
          width={350}
          height={150}
          alt="zurag"
        />
      </div>
    </div>
  );
};
