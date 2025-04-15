import { Heading } from "./Heading";
import { InputField } from "./InputField";

export const SecondCard = ({
  nextPage,
  previousPage,
  handleInputChange,
  formValues,
}) => {
  const { email } = formValues;
  const { phone } = formValues;
  const { password } = formValues;
  const { confirmPassword } = formValues;

  const continueButtonTailwind =
    "bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  w-[50%]";
  const backButtonTailwind =
    "bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded  w-[50%]";

  return (
    <div>
      <Heading />
      <InputField
        name="email"
        label="Email"
        placeholder="your email"
        type="email"
        handleInputChange={handleInputChange}
        value={email}
      />
      <InputField
        name="phone"
        label="Phone number"
        placeholder="Phone number"
        type="number"
        value={phone}
        handleInputChange={handleInputChange}
      />
      <InputField
        label="Password"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        handleInputChange={handleInputChange}
      />
      <InputField
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        handleInputChange={handleInputChange}
        name="confirmPassword"
        value={confirmPassword}
      />

      <button onClick={previousPage} className={backButtonTailwind}>
        Back
      </button>
      <button onClick={nextPage} className={continueButtonTailwind}>
        Continue
      </button>
    </div>
  );
};
