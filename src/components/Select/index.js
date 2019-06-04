import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { colors } from '../../constants'

const SelectStyled = styled.select`
  position: relative;
  border-radius: 4px;
  background: transparent;
  border: ${
  props => (props.error
    ? `2px solid ${colors.error}`
    : `1px solid ${colors.gray}`)
};
  font: inherit;
  color: currentColor;
  width: 100%;
  height: 3em;
  margin: 0;
  padding: ${
  props => (props.error
    ? '5px 11px 6px'
    : '6px 12px 7px')
};

  &:focus, &:active {
    border-color: red;
    border: 2px solid ${
  props => (props.error
    ? colors.error
    : colors.default)
};
    padding: 5px 11px 6px;
    box-shadow: none !important;
    outline: 0;
    box-shadow: none !important;
  }
`

const LabelStyled = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.mineShaft};
`

const LabelErrorStyled = styled.span`
  font-size: 14px;
  color: ${colors.error};
`

function Select(props) {
  const {
    options,
    label,
    error,
    errorMessage,
  } = props

  return (
    <Flex flexDirection="column">
      <Box mb="4px">
        <LabelStyled>
          { label }
        </LabelStyled>
      </Box>
      <Box>
        <SelectStyled {...props}>
          <option>Selecione</option>
          {
            options.map(({ value, text }) => (
              <option key={value} value={value}>{text}</option>
            ))
          }
        </SelectStyled>
      </Box>
      {error && (
        <Box mt="4px">
          <LabelErrorStyled>{ errorMessage }</LabelErrorStyled>
        </Box>
      )}
    </Flex>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
}

Select.defaultProps = {
  label: '',
  error: false,
  errorMessage: '',
}

export default Select
