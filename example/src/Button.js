import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  background: #f2f2f3;
  display: flex;
  box-sizing: border-box;
  border: 1px solid rgba(49, 48, 48, 0.05);
  align-items: center;
  justify-content: center;
  width: 25%;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
  height: 20%;
  min-width: 25%;

  &:focus {
    outline: none
  }
`;

function Button({
  onClick,
  value,
  label,
}) {
  return (
    <Wrapper
      type="button"
      onClick={onClick}
      className="Button"
      data-value={value}
    >
      {label}
    </Wrapper>
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
