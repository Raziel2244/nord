export function Input(props) {
  return (
    <>
      {props.type === "checkbox" && <input {...props} />}
      {props.type === "select" && <select {...props} />}
    </>
  );
}

export default Input;
