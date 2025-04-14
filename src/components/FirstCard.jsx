import { InputField } from "./InputField";
import { Heading } from "./Heading";

export const FirstCard = ({ addOne }) => {
  return (
    <div>
      <Heading />
      <InputField
        label="First name"
        placeholder="your first name"
        type="text"
      />

      <InputField label="Last name" placeholder="your last name" type="text" />
      <InputField label="Username" placeholder="your username" type="text" />

      <button onClick={addOne} className="bg-black text-white">
        Continue
      </button>
    </div>
  );
};
