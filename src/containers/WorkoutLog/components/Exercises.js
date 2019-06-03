import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete';
import { Table } from '../../../components/Table'
import Button from '../../../components/Button'
import { colors } from '../../../constants'

const IconStyled = styled(DeleteIcon)`
  color: ${colors.error};
  cursor: pointer;
`

function Exercises (props) {
  const {
    remove,
    list
  } = props

  return (
    <Flex>
      <Table>
        <thead>
          <tr>
            <th>Tempo</th>
            <th>Tipo</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((log) => (
              <tr key={log.uuid}>
                <td>{ log.timeSpent }</td>
                <td>{ log.type }</td>
                <td>{ log.date }</td>
                <td width="40px">
                  <IconStyled
                    onClick={() => remove({ uuid: log.uuid })} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Flex>
  )
}

Exercises.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    timeSpent: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })),
  remove: PropTypes.func.isRequired
}

Exercises.defaultProps = {
  list: []
}

export default Exercises
