import React from 'react';
import PropTypes from 'prop-types';

const Display = ({
  data,
}) => {
  const string = data.join('');

  return (
    <div className="Display">
      {string}
    </div>
  );
};

Display.propTypes = {
  /*
  TODO: array도 안되고 any도 안되고..
  */
  data: PropTypes.array.isRequired,
};

export default Display;
