import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import RouterConfig from './routes'
import { ScrollLockProvider } from './contexts/ScrollLockContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollLockProvider>
      <RouterProvider router={RouterConfig} />
    </ScrollLockProvider>
  </React.StrictMode>,
)
