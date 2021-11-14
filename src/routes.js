import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { Redirect } from 'react-router-dom'

const protectedRoutes = [
  { path: '/app', component: Dashboard },
  { component: () => <Redirect to='/app' /> },
]

const publicRoutes = [{ path: '/login', component: Login }]

export { protectedRoutes, publicRoutes }
