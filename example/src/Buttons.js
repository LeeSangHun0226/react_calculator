import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({
  children,
}) => (
  <div className="Buttons">
    {children}
  </div>
);

Buttons.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Buttons;
