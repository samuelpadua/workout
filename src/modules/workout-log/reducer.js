import guid from '../../utils/guid'
import {
  WORKOUT_LOG_ADD,
  WORKOUT_LOG_REMOVE
} from './constants'

export const INITIAL_STATE = {
  list: [],
  filterBy: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case WORKOUT_LOG_ADD:
      return {
        ...state,
        list: state.list.concat({
          uuid: guid(),
          ...action.payload
        })
      }
    case WORKOUT_LOG_REMOVE:
      return {
        ...state,
        list: state.list.filter((item) => (
          item.uuid !== action.payload.uuid
        ))
      }
    default:
      return state
  }
}
