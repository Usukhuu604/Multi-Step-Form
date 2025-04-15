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
      />
      <InputField
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        handleInputChange={handleInputChange}
        name="confirmPassword"
        value={confirmPassword}
      />

      <button onClick={previousPage} className="bg-red-500 text-white">
        Back
      </button>
      <button onClick={nextPage} className="bg-black text-white">
        Continue
      </button>
    </div>
  );
};
