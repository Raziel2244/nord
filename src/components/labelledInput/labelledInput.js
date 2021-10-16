import Input from "../input";

export function LabelledInput({ id, label, ...props }) {
  return (
    <label htmlFor={id}>
      {label}
      <Input id={id} {...props} />
    </label>
  );
}

export default LabelledInput;
