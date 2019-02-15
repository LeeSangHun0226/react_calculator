import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onClick,
  value,
  label,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="Button"
      data-value={value}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
