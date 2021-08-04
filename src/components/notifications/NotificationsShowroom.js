import { Notifications } from './Notifications'
import {
  showNotificationWithTimeout,
  toggleNotifications,
} from '../../store/thunks-notification'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'

export function NotificationsShowroom() {
  const dispatch = useDispatch()

  const handleToggleNotificationsClick = () => {
    dispatch(toggleNotifications())
  }
  const handleSendSuccessNotificationClick = () => {
    dispatch(
      showNotificationWithTimeout({
        title: 'Hello',
        text: 'This is the notification',
        type: 'success',
      })
    )
  }
  const handleSendInfoNotificationClick = () => {
    dispatch(
      showNotificationWithTimeout({
        title: 'Hello',
        text: 'This is the notification',
        type: 'info',
      })
    )
  }
  const handleSendWarningNotificationClick = () => {
    dispatch(
      showNotificationWithTimeout({
        title: 'Hello',
        text: 'This is the notification',
        type: 'warning',
      })
    )
  }

  return (
    <>
      <div className="buttons-container">
        <Button onClick={handleToggleNotificationsClick}>
          Toggle Notification
        </Button>
        <Button onClick={handleSendSuccessNotificationClick}>
          Send Success Notification
        </Button>
        <Button onClick={handleSendInfoNotificationClick}>
          Send Info Notification
        </Button>
        <Button onClick={handleSendWarningNotificationClick}>
          Send Info Notification
        </Button>
      </div>
      <Notifications />
    </>
  )
}
