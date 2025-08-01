"use client";

import { InputField } from "../components/InputField";
import { Heading } from "../components/Heading";
import { ImageInput } from "../components/ImageInput";

const isEmpty = (value) => !value?.trim();
const validateStepThree = ({ dateOfBirth, profileImage }) => {
  const validationErrors = {};

  if (isEmpty(dateOfBirth)) {
    validationErrors.dateOfBirth = "enter birthdate";
  }

  if (!profileImage) {
    validationErrors.profileImage = "enter image";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;
  return { isFormValid, validationErrors };
};

export const ThirdCard = ({
  nextPage,
  previousPage,
  handleInputChange,
  formValues,
  setFormValues,
  formErrors,
  updateFormErrors,
}) => {
  const { dateOfBirth, profileImage } = formValues;
  const { dateOfBirth: errorDateOfBirth, profileImage: errorProfileImage } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepThree(formValues);
    if (isFormValid) {
      nextPage();
    }
    updateFormErrors(validationErrors);
  };

  const continueButtonTailwind = "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  w-[50%]";
  const backButtonTailwind = "bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded  w-[50%]";
  return (
    <form className="bg-white p-4 rounded-[20px]">
      <Heading />
      <InputField
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        placeholder="--/--/----"
        handleInputChange={handleInputChange}
        value={dateOfBirth}
        error={errorDateOfBirth}
      />
      <ImageInput
        label="Profile image"
        type="file"
        name="profileImage"
        value={profileImage}
        setFormValues={setFormValues}
        error={errorProfileImage}
      />
      <button onClick={previousPage} className={backButtonTailwind}>
        Back
      </button>
      <button onClick={handleSubmit} className={continueButtonTailwind}>
        Submit
      </button>
    </form>
  );
};
