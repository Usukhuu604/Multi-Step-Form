import { InputField } from "./InputField";
import { Heading } from "./Heading";

export const ThirdCard = () => {
  return (
    <div>
      <Heading />
      <InputField label="Date of birth" type="date" />
      <InputField label="Profile image" type="image" />
      <button>Continue</button>
    </div>
  );
};
