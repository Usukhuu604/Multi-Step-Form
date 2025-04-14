import { Heading } from "./Heading";
import { InputField } from "./InputField";

export const SecondCard = ({ addOne, p }) => {
  return (
    <div>
      <Heading />
      <InputField label="Email" placeholder="your email" type="email" />
      <InputField
        label="Phone number"
        placeholder="Phone number"
        type="number"
      />
      <InputField label="Password" placeholder="Password" type="password" />
      <InputField
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
      />

      <button onClick={addOne} className="bg-black text-white">
        Continue
      </button>
    </div>
  );
};
