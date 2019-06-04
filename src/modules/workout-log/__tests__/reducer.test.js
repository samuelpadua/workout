import guid from '../../../utils/guid'
import {
  WORKOUT_LOG_ADD,
  WORKOUT_LOG_REMOVE,
  WORKOUT_LOG_FILTER_CHANGE,
} from '../constants'
import workoutReducer, { INITIAL_STATE } from '../reducer'


describe('reducer workoutLog', () => {
  it('should init state', () => {
    const reducer = workoutReducer(undefined, {})

    expect(reducer).toEqual(INITIAL_STATE)
  })

  it('should handle WORKOUT_LOG_ADD to add item to workout', () => {
    const payload = {
      uuid: guid(),
      timeSpent: '00:30',
      type: 'run',
      date: '2019-06-01',
    }

    const reducer = workoutReducer(INITIAL_STATE, { type: WORKOUT_LOG_ADD, payload })

    expect(reducer).toEqual({
      ...INITIAL_STATE,
      list: [payload],
    })
  })

  it('should handle WORKOUT_LOG_REMOVE to remove item from workout', () => {
    const initialState = {
      ...INITIAL_STATE,
      list: [
        {
          uuid: guid(),
          timeSpent: '00:30',
          type: 'run',
          date: '2019-06-01',
        },
        {
          uuid: guid(),
          timeSpent: '00:45',
          type: 'swimming',
          date: '2019-06-01',
        },
      ],
    }

    const payload = {
      uuid: initialState.list[1].uuid,
    }

    const reducer = workoutReducer(initialState, { type: WORKOUT_LOG_REMOVE, payload })

    expect(reducer).toEqual({
      ...initialState,
      list: [initialState.list[0]],
    })
  })

  it('should handle WORKOUT_LOG_FILTER_CHANGE to change applied filter in list', () => {
    const payload = {
      orderBy: 'desc',
      column: 'timeSpent',
    }

    const reducer = workoutReducer(INITIAL_STATE, { type: WORKOUT_LOG_FILTER_CHANGE, payload })

    expect(reducer).toEqual({
      ...INITIAL_STATE,
      filter: payload,
    })
  })
})
