import { InputField } from "../components/InputField";
import { Heading } from "../components/Heading";

const isEmpty = (value) => !value?.trim();

const validateStepOne = ({ firstName, lastName, userName }) => {
  const validationErrors = {};

  if (isEmpty(firstName)) {
    validationErrors.firstName = "Нэрээ оруулна уу!";
  }
  if (isEmpty(lastName)) {
    validationErrors.lastName = "Овог нэрээ оруулна уу!";
  }
  if (isEmpty(userName)) {
    validationErrors.userName = "Хэрэглэгчийн нэрээ оруулна уу!";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const FirstCard = ({ nextPage, handleInputChange, formValues, formErrors, updateFormErrors }) => {
  const { firstName, lastName, userName } = formValues;
  const { firstName: errorFirstName, lastName: errorLastName, userName: errorUserName } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepOne(formValues);
    if (isFormValid) {
      nextPage();
    }
    updateFormErrors(validationErrors);
  };

  const continueButtonTailwind =
    "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";

  return (
    <form className="bg-white p-4 rounded-[20px]">
      <Heading />
      <InputField
        name="firstName"
        label="First name"
        placeholder="Your first name"
        type="text"
        handleInputChange={handleInputChange}
        value={firstName}
        error={errorFirstName}
      />

      <InputField
        name="lastName"
        label="Last name"
        placeholder="Your last name"
        type="text"
        handleInputChange={handleInputChange}
        value={lastName}
        error={errorLastName}
      />
      <InputField
        name="userName"
        label="Username"
        placeholder="Your username"
        type="text"
        handleInputChange={handleInputChange}
        value={userName}
        error={errorUserName}
      />

      <button onClick={handleSubmit} className={continueButtonTailwind} type="submit">
        Continue
      </button>
    </form>
  );
};
