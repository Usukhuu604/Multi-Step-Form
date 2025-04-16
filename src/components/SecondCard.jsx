import { Heading } from "./Heading";
import { InputField } from "./InputField";

const isEmpty = (value) => !value?.trim();

const validateStepTwo = ({ email, phone, password, confirmPassword }) => {
  const validationErrors = {};
  const isPhone = (num) => {
    return !(Number.isInteger(Number(num)) && num.length === 8);
  };
  const passwordValidation = (pass1, pass2) => {
    return !(pass1 == pass2);
  };
  if (isEmpty(email)) {
    validationErrors.email = "email оруулна уу!";
  }
  if (isEmpty(phone) || isPhone(phone)) {
    validationErrors.phone = "Шаардлага хангахгуй дугаар!";
  }
  if (isEmpty(password)) {
    validationErrors.password = "password оруулна уу!";
  }

  if (isEmpty(confirmPassword) || !(password == confirmPassword)) {
    validationErrors.confirmPassword = "re-password оруулна уу!";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const SecondCard = ({
  nextPage,
  previousPage,
  handleInputChange,
  formValues,
  formErrors,
  updateFormErrors,
}) => {
  const { email, phone, password, confirmPassword } = formValues;
  const {
    email: errorEmail,
    phone: errorPhone,
    password: errorPassword,
    confirmPassword: errorConfirmPassword,
  } = formErrors;

  const continueButtonTailwind =
    "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  w-[50%]";
  const backButtonTailwind =
    "bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded  w-[50%]";

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepTwo(formValues);

    if (isFormValid) {
      nextPage();
    }

    updateFormErrors(validationErrors);
  };
  return (
    <form>
      <Heading />
      <InputField
        name="email"
        label="Email"
        placeholder="your email"
        type="email"
        handleInputChange={handleInputChange}
        value={email}
        error={errorEmail}
      />
      <InputField
        name="phone"
        label="Phone number"
        placeholder="Phone number"
        type="number"
        value={phone}
        handleInputChange={handleInputChange}
        error={errorPhone}
      />
      <InputField
        label="Password"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        handleInputChange={handleInputChange}
        error={errorPassword}
      />
      <InputField
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        handleInputChange={handleInputChange}
        name="confirmPassword"
        value={confirmPassword}
        error={errorConfirmPassword}
      />

      <button onClick={previousPage} className={backButtonTailwind}>
        Back
      </button>
      <button
        onClick={handleSubmit}
        className={continueButtonTailwind}
        type="submit"
      >
        Continue
      </button>
    </form>
  );
};
