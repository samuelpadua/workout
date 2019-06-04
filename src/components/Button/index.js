import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from '../../utils/LightenDarkenColor'
import { colors } from '../../constants'

const ButtonStyled = styled.button`
  width: ${props => (props.full ? '100%' : '')};
  padding: 6px;
  border: 0;
  font: inherit;
  height: 3em;
  border-radius: 4px;
  background: ${props => colors[props.color]};
  box-shadow: none !important;
  outline: 0;
  color: white;

  &:hover {
    background: ${props => darken(colors[props.color], 10)};
  }

  &:active {
    background: ${props => darken(colors[props.color], 20)};
  }
`

function Button(props) {
  const { children } = props

  return (
    <ButtonStyled {...props}>
      { children }
    </ButtonStyled>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  full: PropTypes.bool,
  children: PropTypes.node,
}

Button.defaultProps = {
  color: 'default',
  full: false,
  children: '',
}

export default Button
