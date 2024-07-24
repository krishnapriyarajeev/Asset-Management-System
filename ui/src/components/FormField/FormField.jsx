import { useState } from "react";
import "./FormField.scss";

/* eslint-disable react/prop-types */
const FormField = (props) => {
  const [type, setType] = useState(props.type);
  const onChange = (e) => {
    let x = { id: e.target.id, value: e.target.value };
    console.log(x);
    props.onchange(x);
  };
  return (
    <div className="detail-box">
      <label className="detail-label" htmlFor={props.id}>
        {props.text}
      </label>
      <input
        onMouseEnter={() => props.type == "password" && setType("text")}
        onMouseLeave={() => setType(props.type)}
        type={type}
        className="form-input"
        id={props.id}
        placeholder={props.id == "exchangeAsset" ? " -" : props.text}
        onChange={onChange}
        disabled={props.disable}
        value={props.data && props.data[props.id]}
      />
    </div>
  );
};
export default FormField;
