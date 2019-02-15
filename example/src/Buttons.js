import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ children }) {
  return (
    <div className="Buttons">
      {children}
    </div>
  );
}

Buttons.propTypes = {
  children: PropTypes.node,
};

Buttons.defaultProps = {
  children: null,
};

export default Buttons;
