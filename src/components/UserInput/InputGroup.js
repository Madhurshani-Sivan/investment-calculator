import Input from "./Input";

const InputGroup = (props) => {
  return (
    <div className="input-group">
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
