import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  value,
  label,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="Button"
    data-value={value}
  >
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
