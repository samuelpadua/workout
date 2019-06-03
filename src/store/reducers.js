import { combineReducers } from 'redux';
import workoutLog from '../modules/workout-log/reducer';

export const Reducers = combineReducers({
  workoutLog,
});
