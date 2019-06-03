import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../constants'

const InputStyled = styled.input`
  position: relative;
  border-radius: 4px;
  box-sizing : border-box;
  border: ${
    props => props.error
      ? `2px solid ${colors.error}`
      : `1px solid ${colors.lightGray}`
  };
  font: inherit;
  color: currentColor;
  width: 100%;
  height: 3em;
  margin: 0;
  padding: ${
    props => props.error
      ? '5px 11px 6px'
      : '6px 12px 7px'
  };

  &:focus {
    border-color: red;
    border: 2px solid ${
      props => props.error
        ? colors.error
        : colors.default
    };
    padding: 5px 11px 6px;
    box-shadow: none !important;
    outline: 0;
  }
`

function Input (props) {
  return <InputStyled { ...props } />
}

Input.propTypes = {
  error: PropTypes.bool
}

Input.defaultProps = {
  error: false
}

export default Input
