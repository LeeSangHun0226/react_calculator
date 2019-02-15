import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 80%;
`;

function Buttons({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Buttons.propTypes = {
  children: PropTypes.node,
};

Buttons.defaultProps = {
  children: null,
};

export default Buttons;
