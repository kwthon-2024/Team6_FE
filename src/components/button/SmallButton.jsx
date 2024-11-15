import "./SmallButton.css";

/**
 *
 * @param {*} props
 * @param {boolean} props.selected - 선택에 따라 스타일 변경 flag
 * @returns
 */
const SmallButton = ({ children, onClick, selected, style }) => {
  return (
    <button
      className={`small-button p-13-700 j-content-center a-items-center ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default SmallButton;
