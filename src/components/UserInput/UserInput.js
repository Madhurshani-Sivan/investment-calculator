import Input from "./Input";
import InputGroup from "./InputGroup";

const UserInput = () => {
  const inputs = [
    { id: "current-savings", value: "Current Savings ($)" },
    { id: "yearly-contribution", value: "Yearly Savings ($)" },
    { id: "expected-return", value: "Expected Interest (%, per year)" },
    { id: "duration", value: "Investment Duration (years)" },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  const resetHanlder = () => {
    console.log("reset");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <InputGroup inputs={inputs.slice(0, 2)} />
      <InputGroup inputs={inputs.slice(2)} />
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHanlder}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
