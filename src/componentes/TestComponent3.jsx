function TestComponent3() {
  return (
    <div>
      <div>
        <h1>This is a test three</h1>
      </div>
    </div>
  );
}

function TestComponent4(props) {
  return (
    <div
      style={{
        background: "yellow",
        color: "white",
        whidth: "200vh",
        right: "80vh",
        padding: "5px",
        border: "2px solid purple",
        marginBottom: "200vh",
      }}
    >
      <div>{props.name}</div>
      <div>{props.lastname}</div>
    </div>
  );
}

export { TestComponent3, TestComponent4 };
