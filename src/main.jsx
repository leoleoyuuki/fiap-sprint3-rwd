import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'
import RouterConfig from './routes'
=======
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Alunos from './routes/Alunos/index.jsx'
import App from './App'
import Pagina from './routes/Pagina'



let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/',
       element: <Pagina/>
      },
      
      {path: '/alunos', 
      element: <Alunos/>
    }
    ]
  }
])
>>>>>>> main

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={RouterConfig} />
  </React.StrictMode>,
)
