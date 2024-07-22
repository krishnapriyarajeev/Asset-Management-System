import "./button.scss";

const Button = ({
  innerText,
  type = "submit",
  style = "normal",
  onClick = () => null,
}) => (
  <button
    type={type}
    data-testid="button-"
    className={style === "outline" ? "outline-btn" : "normal-btn"}
    onClick={onClick ? onClick : ""}
  >
    {innerText}
  </button>
);

export default Button;
