import React from 'react';
import PropTypes from 'prop-types';
import MainButton from './styles';

function Button({ children }) {
  return <MainButton>{children}</MainButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Button;
