import { useState } from "react";
import InputGroup from "./InputGroup";
import classes from "./UserInput.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputs = [
    { id: "current-savings", value: "Current Savings ($)" },
    { id: "yearly-contribution", value: "Yearly Savings ($)" },
    { id: "expected-return", value: "Expected Interest (%, per year)" },
    { id: "duration", value: "Investment Duration (years)" },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHanlder = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputGroup
        inputs={inputs.slice(0, 2)}
        onInputChange={inputChangeHandler}
        userInput={userInput}
      />
      <InputGroup
        inputs={inputs.slice(2)}
        onInputChange={inputChangeHandler}
        userInput={userInput}
      />
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHanlder}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
