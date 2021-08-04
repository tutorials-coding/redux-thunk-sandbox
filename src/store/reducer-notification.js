import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  SET_NOTIFICATIONS_ENABLED,
} from './actions'

const initState = {
  // improvement - enable and check it in thunk
  notificationsEnabled: true,
  notifications: [],
}

export const reducerNotification = (state = initState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      const payload = action.payload
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: payload.id,
            title: payload.title,
            text: payload.text,
            type: payload.type,
          },
        ],
      }
    }
    case HIDE_NOTIFICATION: {
      const id = action.payload.id
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== id),
      }
    }
    case SET_NOTIFICATIONS_ENABLED: {
      const notificationsEnabled = action.payload.status
      return {
        ...state,
        notificationsEnabled,
      }
    }
    default:
      return state
  }
}
