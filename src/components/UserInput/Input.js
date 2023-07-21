const Input = (props) => {
  const inputChangeHandler = (input, value) => {
    console.log(input, value);
  };

  return (
    <p>
      <label htmlFor={props.input.id}>{props.input.value}</label>
      <input
        type="number"
        id={props.input.id}
        onChange={(event) =>
          inputChangeHandler(props.input.id, event.target.value)
        }
      />
    </p>
  );
};

export default Input;
