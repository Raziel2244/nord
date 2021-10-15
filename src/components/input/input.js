export function Input({ type, children, ...props }) {
  return (
    <>
      {(type === "checkbox" || type === "number") && (
        <input type={type} {...props}></input>
      )}
      {type === "select" && <select {...props}>{children}</select>}
    </>
  );
}

export default Input;
