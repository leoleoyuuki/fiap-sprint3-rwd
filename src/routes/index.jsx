import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import RouteWrapper from './App'

const RouterConfig = createBrowserRouter([
  {
    path: '/',
    element: (
      <RouteWrapper>
        <Home />
      </RouteWrapper>
    ),
  },
  {
    path: '/alunos',
    element: <RouteWrapper></RouteWrapper>,
  },
])

export default RouterConfig
