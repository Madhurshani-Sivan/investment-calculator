const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.input.id}>{props.input.value}</label>
      <input type="number" id={props.input.id} />
    </p>
  );
};

export default Input;
