import Input from "../input";

export function LabelledInput({ id, label, children, className, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <Input id={id} {...props}>
        {children}
      </Input>
    </div>
  );
}

export default LabelledInput;
