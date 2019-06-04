import { createSelector } from 'reselect'
import sortByDate from '../../utils/sortByDate'
import sortByAlphabet from '../../utils/sortByAlphabet'

export const workoutLogSelector = state => state

const applyOrderBy = ({ filter, list }) => {
  if (filter.column === 'date') {
    return sortByDate(list, filter.orderBy)
  }

  return sortByAlphabet(list, filter.orderBy, filter.column)
}

export const getList = createSelector(
  workoutLogSelector,
  workoutLog => applyOrderBy(workoutLog),
)
