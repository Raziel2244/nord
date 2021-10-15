import Input from "../input";

export function LabelledInput({ id, label, children, ...props }) {
  return (
    <label htmlFor={id}>
      {label}
      <Input id={id} {...props}>
        {children}
      </Input>
    </label>
  );
}

export default LabelledInput;
