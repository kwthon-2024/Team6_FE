import "./InputField.css";

const InputField = ({ title, type = "text", value, onChange }) => {
  return (
    <div className="input-field">
      {title ? <p className="p-16-600 c-black">{title}</p> : null}
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
