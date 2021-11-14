import { Switch, Redirect } from 'react-router-dom'
import AppRoute from './components/AppRoute'
import { protectedRoutes, publicRoutes } from './routes'
import NoLayout from './layouts/NoLayout'
import DashLayout from './layouts/DashLayout'

const App = () => {
  return (
    <Switch>
      {publicRoutes.map((route, i) => (
        <AppRoute
          key={`public-${i}`}
          isProtected={false}
          path={route.path}
          component={route.component}
          exact={true}
          layout={NoLayout}
        />
      ))}
      {protectedRoutes.map((route, i) => (
        <AppRoute
          key={`protected-${i}`}
          path={route.path}
          component={route.component}
          exact={true}
          isProtected={true}
          layout={DashLayout}
        />
      ))}
      <Redirect to='/login' />
    </Switch>
  )
}

export default App
