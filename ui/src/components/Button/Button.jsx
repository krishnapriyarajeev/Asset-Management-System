/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Button.scss";
import React from "react";

const Button = ({ text, className, handleForm }) => {
  return (
    <button
      type="submit"
      data-testid="button-test-id"
      className={className}
      onClick={handleForm}
    >
      {text}
    </button>
  );
};
export default Button;
