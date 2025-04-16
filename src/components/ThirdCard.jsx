"use client";

import { InputField } from "./InputField";
import { Heading } from "./Heading";
import { ImageInput } from "./ImageInput";

export const ThirdCard = ({
  nextPage,
  previousPage,
  handleInputChange,
  formValues,
  setFormValues,
}) => {
  const { dateOfBirth, profileImage } = formValues;

  const continueButtonTailwind =
    "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  w-[50%]";
  const backButtonTailwind =
    "bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded  w-[50%]";
  return (
    <form className="">
      <Heading />
      <InputField
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        handleInputChange={handleInputChange}
        value={dateOfBirth}
      />
      <ImageInput
        label="Profile image"
        type="file"
        name="profileImage"
        value={profileImage}
        setFormValues={setFormValues}
      />
      <button onClick={previousPage} className={backButtonTailwind}>
        Back
      </button>
      <button onClick={nextPage} className={continueButtonTailwind}>
        Submit
      </button>
    </form>
  );
};
