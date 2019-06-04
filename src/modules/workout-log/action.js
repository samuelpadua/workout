import {
  WORKOUT_LOG_ADD,
  WORKOUT_LOG_REMOVE,
  WORKOUT_LOG_FILTER_CHANGE,
} from './constants'

export const add = payload => ({
  type: WORKOUT_LOG_ADD,
  payload,
})

export const remove = payload => ({
  type: WORKOUT_LOG_REMOVE,
  payload,
})

export const changeFilter = payload => ({
  type: WORKOUT_LOG_FILTER_CHANGE,
  payload,
})
