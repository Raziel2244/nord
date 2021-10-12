export function Tool({ id, title, children, onSubmit }) {
    return (
        <div id={id} className="tool">
            <h1 className="title">{title}</h1>
            <form className="input" onSubmit={onSubmit}>{children}</form>
            <div className="output"></div>
            <div className="stats"></div>
        </div >
    );
}

export default Tool;
