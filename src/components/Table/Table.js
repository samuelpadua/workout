import React from 'react'
import PropTypes from 'prop-types'
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

function Table(props) {
  const { children } = props

  return (
    <TableStyled>
      { children }
    </TableStyled>
  )
}

Table.propTypes = {
  children: PropTypes.node,
}

Table.defaultProps = {
  children: '',
}

export default Table
