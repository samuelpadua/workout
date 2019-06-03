import React from 'react'
import styled from 'styled-components'
import { colors } from '../../constants'

const TableStyled = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;
  border-collapse: collapse;

  th, td {
    padding: 10px 0;
  }

  th {
    border-bottom: 1px solid ${colors.gray};
  }

  td {
    border-bottom: 1px solid ${colors.lightGray};
  }
`

function Table (props) {
  return (
    <TableStyled>
      { props.children }
    </TableStyled>
  )
}

export default Table
