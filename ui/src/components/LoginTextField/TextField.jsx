/* eslint-disable no-unused-vars */
import "./Textfield.scss";
import { forwardRef, useEffect } from "react";
import React from "react";
/* eslint-disable react/prop-types */
const TextField = forwardRef(function Textfield(props, ref) {
  const onChange = (e) => {
    if (props.handleChange) props.handleChange(e.target.value);
  };

  // useEffect(() => {
  //   if (text.length > 5) alert("Length>5");
  //   console.log(text);
  // }, [text]);

  return (
    <span className="loginSpan">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        data-testid="texttest"
        className="loginInput"
        id={props.id}
        placeholder={props.label}
        value={props.value}
        onChange={onChange}
        ref={ref}
      />
      {props.error ? <div>{props.error}</div> : ""}
    </span>
  );
});
export default TextField;
