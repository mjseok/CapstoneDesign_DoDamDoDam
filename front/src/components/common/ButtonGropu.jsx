import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonGroup = ({ children }) => <Wrapper>{children}</Wrapper>;

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 6px;
  border: 1px solid transparent;
`;

export default ButtonGroup;
