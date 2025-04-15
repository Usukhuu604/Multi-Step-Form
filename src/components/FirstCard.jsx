import { InputField } from "./InputField";
import { Heading } from "./Heading";

export const FirstCard = ({ nextPage, handleInputChange, formValues }) => {
  const { firstName } = formValues;
  const { lastName } = formValues;
  const { userName } = formValues;

  const continueButtonTailwind =
    "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full";

  return (
    <div>
      <Heading />
      <InputField
        name="firstName"
        label="First name"
        placeholder="Your first name"
        type="text"
        handleInputChange={handleInputChange}
        value={firstName}
      />

      <InputField
        name="lastName"
        label="Last name"
        placeholder="Your last name"
        type="text"
        handleInputChange={handleInputChange}
        value={lastName}
      />
      <InputField
        name="userName"
        label="Username"
        placeholder="Your username"
        type="text"
        handleInputChange={handleInputChange}
        value={userName}
      />

      <button onClick={nextPage} className={continueButtonTailwind}>
        Continue
      </button>
    </div>
  );
};
