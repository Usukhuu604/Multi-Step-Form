import { InputField } from "./InputField";
import { Heading } from "./Heading";

export const ThirdCard = ({ nextPage, previousPage, handleInputChange }) => {
  return (
    <div>
      <Heading />
      <InputField
        name="dateOfBirth"
        label="Date of birth"
        type="date"
        handleInputChange={handleInputChange}
      />
      <InputField label="Profile image" type="file" />
      <button onClick={previousPage} className="bg-red-500 text-white">
        Back
      </button>
      <button onClick={nextPage} className="bg-black text-white">
        Submit
      </button>
    </div>
  );
};
