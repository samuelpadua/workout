import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import styled from 'styled-components'
import { colors } from '../../../constants'


const MessageStyled = styled.h3`
  color: ${colors.success};
`

function TotalExerciseHours(props) {
  const { hours } = props
  return (
    <Flex p={20} justifyContent="center">
      <MessageStyled>
        { `${hours} horas de exercícios realizados` }
      </MessageStyled>
    </Flex>
  )
}

TotalExerciseHours.propTypes = {
  hours: PropTypes.number,
}

TotalExerciseHours.defaultProps = {
  hours: 0,
}

export default TotalExerciseHours
