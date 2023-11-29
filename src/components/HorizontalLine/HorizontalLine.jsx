import PropTypes from "prop-types";

import { Line } from "./HorizontalLine.styled";

const HorizontalLine = ({ marginBottom }) => {
  return <Line marginBottom={marginBottom} />;
};

export default HorizontalLine;

HorizontalLine.propTypes = {
  marginBottom: PropTypes.number,
};
