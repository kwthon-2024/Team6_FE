import "./Button.css";

const Button = ({ children, style, onClick }) => {
  return (
    <button className="__button" style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
