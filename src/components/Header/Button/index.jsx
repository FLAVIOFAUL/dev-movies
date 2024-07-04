import React from 'react';
import PropTypes from 'prop-types';
import { ButtonRed, ButtonWhite } from './styles';

function Button({ children, red }) {
  return (
    <>
      {red ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  red: PropTypes.bool, 
};

export default Button;