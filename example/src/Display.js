import React from 'react';
import PropTypes from 'prop-types';

function Display({ data }) {
  const string = data.join('');
  return (
    <div className="Display">
      {string}
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.instanceOf(Array),
};

Display.defaultProps = {
  data: null,
};

export default Display;
