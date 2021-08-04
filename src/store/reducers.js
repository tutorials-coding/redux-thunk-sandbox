import { combineReducers } from 'redux'
import { reducer } from './reducer'
import { reducerNotification } from './reducer-notification'

export const rootReducer = combineReducers({
  userData: reducer,
  app: reducerNotification,
})
