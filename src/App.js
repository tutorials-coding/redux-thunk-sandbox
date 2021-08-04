import { useState } from 'react'
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Button from 'react-bootstrap/Button'

import { getUserAggregatedData } from './store/thunks'
import { NotificationsShowroom } from './components/notifications/NotificationsShowroom'

function App() {
  const dispatch = useDispatch()

  const [userData, setUserData] = useState()

  const getUserData = () => {
    dispatch(getUserAggregatedData(1)).then((data) => {
      setUserData(data)
    })
  }

  return (
    <div className="app__container">
      <Button onClick={getUserData}>Get User Data</Button>

      <pre>{JSON.stringify(userData, null, 2)}</pre>

      <hr />

      <NotificationsShowroom />
    </div>
  )
}

export default App
