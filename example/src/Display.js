import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgb(232, 231, 243);
  border: 1px solid rgba(49, 48, 48, 0.05);
  color: rgb(14, 113, 226);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 29px;
  box-sizing: border-box;
  height: 20%;
  overflow: hidden;
  font-size: 24px;
  position: relative;
`;

function Display({ data }) {
  const string = data.join('');
  return (
    <Wrapper>
      {string}
    </Wrapper>
  );
}

Display.propTypes = {
  data: PropTypes.instanceOf(Array),
};

Display.defaultProps = {
  data: null,
};

export default Display;
