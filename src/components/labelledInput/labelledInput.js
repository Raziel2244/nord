import Input from "../input";

export function LabelledInput({ label, ...props }) {
  return (
    <label htmlFor={props.id}>
      {label}
      <Input {...props} />
    </label>
  );
}

export default LabelledInput;
