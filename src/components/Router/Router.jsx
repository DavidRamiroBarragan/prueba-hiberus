import ProtectedRoute from 'components/PrivateRoute/PrivateRoute'
import Login from 'pages/Login/Login'
import { Switch, Route } from 'react-router-dom'
import { routes } from '../../core/routes/routes'
function Router() {
  return (
    <Switch>
      {routes.map((route, i) => {
        if (route.isProtected) {
          return (
            <ProtectedRoute
              path={route.path}
              exact={route.isExact}
              component={route.component}
              key={route.path}
            />
          )
        }
        return (
          <Route
            path={route.path}
            exact={route.isExact}
            component={route.component}
            key={route.path}
          />
        )
      })}
      <Route path='/' component={Login} />
    </Switch>
  )
}

export default Router
