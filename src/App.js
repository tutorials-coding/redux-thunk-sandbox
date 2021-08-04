import { useState } from 'react'
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Button from 'react-bootstrap/Button'

import { getUserAggregatedData } from './store/thunks'
import { Notifications } from './components/notifications/Notifications'

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
      <Notifications />
    </div>
  )
}

export default App
