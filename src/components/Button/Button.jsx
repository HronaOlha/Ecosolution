// import React from "react";
import { ButtonComponent } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ type, text, marginBottom }) => {
  return (
    <>
      <ButtonComponent
        type={type ? type : "button"}
        marginBottom={marginBottom}
      >
        {text}
      </ButtonComponent>
    </>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  marginBottom: PropTypes.number,
};
