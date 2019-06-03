import {
  WORKOUT_LOG_ADD,
  WORKOUT_LOG_REMOVE
} from './constants'

export const add = (payload) => ({
  type: WORKOUT_LOG_ADD,
  payload
})

export const remove = (payload) => ({
  type: WORKOUT_LOG_REMOVE,
  payload
})
