// import React from "react";
import { ButtonComponent } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ type, text }) => {
  return (
    <>
      <ButtonComponent type={type ? type : "button"}>{text}</ButtonComponent>
    </>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};
