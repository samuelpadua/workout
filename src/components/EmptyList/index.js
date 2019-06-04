import React from 'react'
import { Flex } from '@rebass/grid'
import styled from 'styled-components'
import { colors } from '../../constants'


const MessageStyled = styled.h3`
  color: ${colors.default};
`

function EmptyList() {
  return (
    <Flex p={20} justifyContent="center">
      <MessageStyled>
        Você ainda não cadastrou nenhum exercício
      </MessageStyled>
    </Flex>
  )
}

export default EmptyList
