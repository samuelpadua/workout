import ReduxThunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import guid from '../../../utils/guid'
import { 
  WORKOUT_LOG_ADD,
  WORKOUT_LOG_REMOVE
} from '../constants'
import { INITIAL_STATE } from '../reducer'
import * as actions from '../action'

const mockStore = configureMockStore([ReduxThunk])

describe('actions Workout', () => {
  it('should add new workout item', () => {
    const store = mockStore({
      workoutLog: INITIAL_STATE
    })

    const payload = {
      uuid: guid(),
      timeSpent: '00:30',
      type: 'run',
      date: '2019-06-01'
    }

    const expectedActions = [
      {
        type: WORKOUT_LOG_ADD,
        payload
      }
    ]

    store.dispatch(actions.add(payload))

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should remove workout item', () => {
    const store = mockStore({
      workoutLog: INITIAL_STATE
    })

    const payload = {
      uuid: guid(),
      timeSpent: '00:30',
      type: 'run',
      date: '2019-06-01'
    }

    const expectedActions = [
      {
        type: WORKOUT_LOG_ADD,
        payload
      },
      {
        type: WORKOUT_LOG_REMOVE,
        payload: { uuid: payload.uuid }
      }
    ]

    store.dispatch(actions.add(payload))
    store.dispatch(actions.remove({ uuid: payload.uuid }))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
