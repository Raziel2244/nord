export function Input({ type, children, ...props }) {
  return (
    <>
      {type === "checkbox" && <input type={type} {...props}></input>}
      {type === "number" && <input type={type} {...props}></input>}
      {type === "select" && <select {...props}>{children}</select>}
    </>
  );
}

export default Input;
