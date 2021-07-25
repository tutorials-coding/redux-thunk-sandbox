import { LOG_ERROR, SAVE_USER, SAVE_USER_NOTES } from './actions'

const initState = {
  user: null,
  userNotes: null,
  error: null,
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_USER: {
      const user = action.data
      return {
        ...state,
        user,
      }
    }
    case SAVE_USER_NOTES: {
      const userNotes = action.data
      return {
        ...state,
        userNotes,
      }
    }
    case LOG_ERROR: {
      const error = action.data
      return {
        ...state,
        error,
      }
    }
    default:
      return state
  }
}
