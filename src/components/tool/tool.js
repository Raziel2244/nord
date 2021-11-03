import "./tool.css";

export function Tool({ id, title, children, handleRoll, output, stats }) {
  function onSubmit(e) {
    e.preventDefault();
    handleRoll();
  }

  return (
    <div id={id} className="tool">
      <h1 className="title">{title}</h1>
      <form className="input" onSubmit={onSubmit}>
        {children}
      </form>
      {output?.length > 0 && <div className="output">{output}</div>}
      {stats?.length > 0 && <div className="stats">{stats}</div>}
    </div>
  );
}

export default Tool;
