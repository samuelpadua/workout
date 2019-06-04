import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import Table from '../../../components/Table'
import EmptyList from '../../../components/EmptyList'
import TotalExerciseHours from './TotalExerciseHours'
import ArrowOrderBy from './ArrowOrderBy'
import { colors } from '../../../constants'

const IconStyled = styled(DeleteIcon)`
  color: ${colors.error};
  cursor: pointer;
`

function Exercises(props) {
  const {
    remove,
    list,
    filter,
    changeFilter,
    totalExerciseTime,
  } = props

  if (!list.length) {
    return <EmptyList />
  }

  return (
    <Flex px={2} flexDirection="column">
      <Box>
        <Table>
          <thead>
            <tr>
              <th>
                <Flex justifyContent="space-between">
                  <Box>Tempo</Box>
                  <Box mr={20}>
                    <ArrowOrderBy
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
                    <ArrowOrderBy
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
                    <ArrowOrderBy
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
      </Box>
      <Box>
        <TotalExerciseHours hours={totalExerciseTime} />
      </Box>
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
  totalExerciseTime: PropTypes.number.isRequired,
}

Exercises.defaultProps = {
  list: [],
}

export default Exercises
