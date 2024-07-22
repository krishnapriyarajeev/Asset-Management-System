// color = green, red, yellow, purple

import "./pill.scss";

const Pill = ({ color, innerText, plain = false, type = "sm" }) => (
  <div className={`pill ${color} pill-${type} ${plain && "plain"}`}>
    <p>{innerText}</p>
  </div>
);

export default Pill;
