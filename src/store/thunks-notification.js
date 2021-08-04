import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './actions'

// type values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
const showNotification = ({ id, title, text, type }) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      id,
      title,
      text,
      type,
    },
  }
}

const hideNotification = (id) => {
  return {
    type: HIDE_NOTIFICATION,
    payload: {
      id,
    },
  }
}

let notificationId = 0
const defaultNotificationIdProvider = () => {
  notificationId++
  return notificationId
}

export const showNotificationWithTimeout = (options) => {
  const timeoutMs = options.timeoutMs || 5000
  const title = options.title || ''
  const text = options.text || ''
  const type = options.type || 'info'
  // improvement - move id provider to options - for tests
  const idProvider = options.idProvider || defaultNotificationIdProvider

  return (dispatch) => {
    const id = idProvider()
    dispatch(showNotification({ id, title, text, type }))

    setTimeout(() => {
      dispatch(hideNotification(id))
    }, timeoutMs)
  }
}