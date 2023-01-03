import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import routes from './router/routes'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/app/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>,
)
