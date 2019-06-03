import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../constants'

const SelectStyled = styled.select`
  position: relative;
  border-radius: 4px;
  background: transparent;
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

  &:focus, &:active {
    border-color: red;
    border: 2px solid ${
      props => props.error
        ? colors.error
        : colors.default
    };
    padding: 5px 11px 6px;
    box-shadow: none !important;
    outline: 0;
    box-shadow: none !important;
  }
`

function Select (props) {
  const {
    options
  } = props

  return (
    <SelectStyled { ...props }>
      <option>Selecione</option>
      {
        options.map(({ value, text }) => (
          <option key={value} value={value}>{text}</option>
        ))
      }
    </SelectStyled>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default Select
