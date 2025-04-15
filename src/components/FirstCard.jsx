import { InputField } from "./InputField";
import { Heading } from "./Heading";

export const FirstCard = ({ nextPage, handleInputChange, formValues }) => {
  const { firstName } = formValues;
  const { lastName } = formValues;
  const { userName } = formValues;
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

      <button
        onClick={nextPage}
        className="bg-black text-white w-full rounded-3xl mt-10"
      >
        Continue
      </button>
    </div>
  );
};
