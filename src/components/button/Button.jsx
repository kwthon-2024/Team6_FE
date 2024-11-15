import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="__button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
