import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

const ContainerBox = styled(Box)`
  max-width: ${props => props.maxWidth};
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  margin: auto;
`

function Container (props) {
  const {
    children
  } = props

  return (
    <ContainerBox { ...props }>
      { children }
    </ContainerBox>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
}

Container.defaultProps = {
  maxWidth: '1024px',
}

export default Container
