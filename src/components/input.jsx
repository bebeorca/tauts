import "../style/Input.css";

function Input({ type, placeholder, value, onChange }) {
  return (
    <div className="inputgroup">
      <div className="entryarea">
        <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
        <div className="labelline">{placeholder}</div>
      </div>
    </div>
  );
}

export default Input;