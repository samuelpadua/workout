import guid from '../../utils/guid'
import {
  WORKOUT_LOG_ADD,
  WORKOUT_LOG_REMOVE,
  WORKOUT_LOG_FILTER_CHANGE,
} from './constants'

export const INITIAL_STATE = {
  list: [],
  filter: {
    orderBy: '',
    column: '',
  },
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case WORKOUT_LOG_ADD:
      return {
        ...state,
        list: state.list.concat({
          uuid: guid(),
          ...action.payload,
        }),
      }
    case WORKOUT_LOG_REMOVE:
      return {
        ...state,
        list: state.list.filter(item => (
          item.uuid !== action.payload.uuid
        )),
      }
    case WORKOUT_LOG_FILTER_CHANGE:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}
