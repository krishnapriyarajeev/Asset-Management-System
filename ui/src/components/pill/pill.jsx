// color = green, red, yellow, purple

import "./pill.scss";

const Pill = ({ type, innerText }) => (
  <div className={`${type} pill`}>
    <p>{innerText}</p>
  </div>
);

export default Pill;
