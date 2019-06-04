import moment from 'moment'
import { createSelector } from 'reselect'
import sortByDate from '../../utils/sortByDate'
import sortByAlphabet from '../../utils/sortByAlphabet'

const workoutLogSelector = state => state

const applyOrderBy = ({ filter, list }) => {
  if (filter.column === 'date') {
    return sortByDate(list, filter.orderBy)
  }

  return sortByAlphabet(list, filter.orderBy, filter.column)
}

const TYPES = {
  run: 'Corrida',
  swimming: 'Natação',
  bike: 'Bicicleta',
}

export const serializeList = list => list.map(item => ({
  ...item,
  date: moment(item.date).format('DD/MM/YYYY'),
  type: TYPES[item.type],
}))

export const getList = createSelector(
  workoutLogSelector,
  workoutLog => serializeList(applyOrderBy(workoutLog)),
)
