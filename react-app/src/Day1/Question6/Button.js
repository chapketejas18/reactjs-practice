import "./Button.css"
export default function Button({ color, text }) {
  const buttonStyle = {
    backgroundColor: color,
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px"
  };

  return (
    <div>
      <button style={buttonStyle} className="button">{text}</button>
    </div>
  );
}
