import { LOG_ERROR, SAVE_USER, SAVE_USER_NOTES } from './actions'

const logError = (data) => {
  return {
    type: LOG_ERROR,
    data,
  }
}

const saveUser = (data) => {
  return {
    type: SAVE_USER,
    data,
  }
}

export const getUser = (userId) => {
  return (dispatch, _, services) => {
    console.log('v.', services.app.version)
    return services.userApi.getUser(userId).then(
      (data) => dispatch(saveUser(data)),
      (error) => dispatch(logError(error))
    )
  }
}

const saveUserNotes = (data) => {
  return {
    type: SAVE_USER_NOTES,
    data,
  }
}

export const getUserNotes = (userId) => {
  return (dispatch, _, services) => {
    return services.notesApi.getUserNotes(userId).then(
      (data) => dispatch(saveUserNotes(data)),
      (error) => dispatch(logError(error))
    )
  }
}

export const getUserAggregatedData = (userId) => {
  return (dispatch, getState) => {
    const userData = getState().userData
    if (userData.user && userData.userNotes) {
      console.log('found in cache')
      return Promise.resolve({
        user: userData.user,
        notes: userData.userNotes,
      })
    }
    console.log('making request')
    return Promise.all([
      dispatch(getUser(userId)),
      dispatch(getUserNotes(userId)),
    ]).then(([user, notes]) => {
      return {
        user: user.data,
        notes: notes.data,
      }
    })
  }
}
