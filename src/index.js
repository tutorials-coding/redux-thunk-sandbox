import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as userApi from './api/user'
import * as notesApi from './api/notes'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './store/reducers'

const APP_VERSION = '1.0.0'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      userApi,
      notesApi,
      app: {
        version: APP_VERSION,
      },
    })
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
