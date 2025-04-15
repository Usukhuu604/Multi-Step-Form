"use client";

import { InputField } from "./InputField";
import { Heading } from "./Heading";
import { useRef, useState } from "react";

export const ThirdCard = ({
  nextPage,
  previousPage,
  handleInputChange,
  formValues,
}) => {
  const { dateOfBirth } = formValues;
  const { profileImage } = formValues;

  const continueButtonTailwind =
    "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  w-[50%]";
  const backButtonTailwind =
    "bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded  w-[50%]";
  return (
    <div>
      <Heading />
      <InputField
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        handleInputChange={handleInputChange}
        value={dateOfBirth}
      />
      <InputField
        label="Profile image"
        type="file"
        name="profileImage"
        value={profileImage}
      />
      <button onClick={previousPage} className={backButtonTailwind}>
        Back
      </button>
      <button onClick={nextPage} className={continueButtonTailwind}>
        Submit
      </button>
    </div>
  );
};
