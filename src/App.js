import { useState } from 'react'
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Button from 'react-bootstrap/Button'

import { getUserAggregatedData } from './store/thunks'
import {
  showNotificationWithTimeout,
  toggleNotification,
} from './store/thunks-notification'
import { Notifications } from './components/notifications/Notifications'

function App() {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState()

  const getUserData = () => {
    dispatch(getUserAggregatedData(1)).then((data) => {
      setUserData(data)
    })
  }

  const handleToggleNotificationsClick = () => {
    dispatch(toggleNotification())
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
    <div className="app__container">
      <Button onClick={getUserData}>Get User Data</Button>

      <pre>{JSON.stringify(userData, null, 2)}</pre>

      <hr />
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
    </div>
  )
}

export default App
