import UserInput from "./UserInput";

const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.input.id}>{props.input.value}</label>
      <input
        type="number"
        id={props.input.id}
        onChange={(event) =>
          props.onInputChange(props.input.id, event.target.value)
        }
        value={props.userInput[props.input.id]}
      />
    </p>
  );
};

export default Input;
