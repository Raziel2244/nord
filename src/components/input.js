export function LabelledInput({ id, label, children, ...props }) {
    return (
        <div className="labelled-input">
            <label htmlFor={id}>{label}</label>
            <Input id={id} {...props}>{children}</Input>
        </div>
    );
}

export function Input({ type, children, ...props }) {
    return (
        <>
            {(type === "checkbox" || type === "number") && <input type={type} {...props}></input>}
            {type === "select" && <select {...props}>{children}</select>}
        </>
    )
}

export default Input;
