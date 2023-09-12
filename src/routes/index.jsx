import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import RouteWrapper from './App'
import Alunos from './Alunos'

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
    element: <RouteWrapper>
      <Alunos />
    </RouteWrapper>,
  },
])

export default RouterConfig
