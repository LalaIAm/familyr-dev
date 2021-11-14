import { Route, Redirect } from 'react-router-dom'

const AppRoute = ({
  component: Component,
  layout: Layout,
  isProtected,
  ...rest
}) => {
  if (!isProtected) {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  } else {
    if (!localStorage.getItem('user')) {
      return <Redirect to='/login' />
    }

    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  }
}

export default AppRoute;