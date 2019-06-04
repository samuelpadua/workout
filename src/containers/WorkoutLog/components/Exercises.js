import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import Table from '../../../components/Table'
import EmptyList from '../../../components/EmptyList'
import { colors } from '../../../constants'

const IconStyled = styled(DeleteIcon)`
  color: ${colors.error};
  cursor: pointer;
`

function OrderByArrow(props) {
  const {
    orderBy,
    column,
    actualColumn,
    changeFilter,
  } = props

  const nextOrderBy = orderBy === 'asc'
    ? 'desc'
    : 'asc'

  const payload = {
    orderBy: nextOrderBy,
    column: actualColumn,
  }

  if (orderBy === 'asc' && column === actualColumn) {
    return <ExpandMoreIcon onClick={() => changeFilter(payload)} />
  }

  if (orderBy === 'desc' && column === actualColumn) {
    return <ExpandLessIcon onClick={() => changeFilter(payload)} />
  }

  return <UnfoldMoreIcon onClick={() => changeFilter(payload)} />
}

OrderByArrow.propTypes = {
  orderBy: PropTypes.string.isRequired,
  column: PropTypes.string.isRequired,
  actualColumn: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

function Exercises(props) {
  const {
    remove,
    list,
    filter,
    changeFilter,
  } = props

  if (!list.length) {
    return <EmptyList />
  }

  return (
    <Flex px={2}>
      <Table>
        <thead>
          <tr>
            <th>
              <Flex justifyContent="space-between">
                <Box>Tempo</Box>
                <Box mr={20}>
                  <OrderByArrow
                    {...filter}
                    changeFilter={changeFilter}
                    actualColumn="timeSpent"
                  />
                </Box>
              </Flex>
            </th>
            <th>
              <Flex justifyContent="space-between">
                <Box>Tipo</Box>
                <Box mr={20}>
                  <OrderByArrow
                    {...filter}
                    changeFilter={changeFilter}
                    actualColumn="type"
                  />
                </Box>
              </Flex>
            </th>
            <th>
              <Flex justifyContent="space-between">
                <Box>Data</Box>
                <Box mr={20}>
                  <OrderByArrow
                    {...filter}
                    changeFilter={changeFilter}
                    actualColumn="date"
                  />
                </Box>
              </Flex>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            list.map(log => (
              <tr key={log.uuid}>
                <td width="33.33%">{ log.timeSpent }</td>
                <td width="33.33%">{ log.type }</td>
                <td width="33.33%">{ log.date }</td>
                <td width="40px">
                  <IconStyled
                    onClick={() => remove({ uuid: log.uuid })}
                  />
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
    date: PropTypes.string.isRequired,
  })),
  filter: PropTypes.shape({
    orderBy: PropTypes.string,
    column: PropTypes.string,
  }).isRequired,
  remove: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

Exercises.defaultProps = {
  list: [],
}

export default Exercises
