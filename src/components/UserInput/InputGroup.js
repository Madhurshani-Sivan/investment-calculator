import Input from "./Input";
import classes from "./UserInput.module.css";

const InputGroup = (props) => {
  return (
    <div className={classes["input-group"]}>
      {props.inputs.map((input) => (
        <Input
          input={input}
          onInputChange={props.onInputChange}
          userInput={props.userInput}
        />
      ))}
    </div>
  );
};

export default InputGroup;
