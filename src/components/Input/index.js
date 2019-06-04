import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { colors } from '../../constants'

const InputStyled = styled.input`
  position: relative;
  border-radius: 4px;
  box-sizing : border-box;
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

  &:focus {
    border-color: red;
    border: 2px solid ${
  props => (props.error
    ? colors.error
    : colors.default)
};
    padding: 5px 11px 6px;
    box-shadow: none !important;
    outline: 0;
  }
`

const LabelStyled = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: ${colors.mineShaft};
`

const LabelErrorStyled = styled.span`
  font-size: 13px;
  color: ${colors.error};
`

function Input(props) {
  const {
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
        <InputStyled {...props} />
      </Box>
      {error && (
        <Box mt="4px">
          <LabelErrorStyled>{ errorMessage }</LabelErrorStyled>
        </Box>
      )}
    </Flex>
  )
}

Input.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
}

Input.defaultProps = {
  error: false,
  errorMessage: '',
  label: '',
}

export default Input
