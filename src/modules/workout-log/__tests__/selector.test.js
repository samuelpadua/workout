import guid from '../../../utils/guid'
import sortByAlphabet from '../../../utils/sortByAlphabet'
import sortByDate from '../../../utils/sortByDate'
import {
  getList,
  serializeList,
} from '../selector'
import workoutReducer, { INITIAL_STATE } from '../reducer'

const list = [
  {
    uuid: guid(),
    timeSpent: '10:00',
    type: 'run',
    date: '2020-06-01',
  },
  {
    uuid: guid(),
    timeSpent: '09:30',
    type: 'bike',
    date: '2019-06-01',
  },
  {
    uuid: guid(),
    timeSpent: '11:30',
    type: 'run',
    date: '2021-06-01',
  },
  {
    uuid: guid(),
    timeSpent: '10:30',
    type: 'swimming',
    date: '2022-06-01',
  },
]

describe('selector workout log', () => {
  it('should handle getList handle with sort by date', () => {
    const initialState = {
      ...INITIAL_STATE,
      list,
    }

    initialState.filter.column = 'date'
    initialState.filter.orderBy = 'asc'

    const state = workoutReducer(initialState, {})

    expect(getList(state)).toEqual(serializeList(sortByDate(state.list, 'asc')))
  })

  it('should handle getList handle with sort by type or time spent', () => {
    const initialState = {
      ...INITIAL_STATE,
      list,
    }

    initialState.filter.column = 'type'
    initialState.filter.orderBy = 'asc'

    const state = workoutReducer(initialState, {})

    expect(getList(state)).toEqual(serializeList(sortByAlphabet(state.list, 'type', 'asc')))
  })
})
