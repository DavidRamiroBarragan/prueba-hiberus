import { Switch, Route } from 'react-router-dom'
import { routes } from 'core/routes/routes'
import ProtectedRoute from 'components/PrivateRoute/PrivateRoute'
import Login from 'pages/Login/Login'
export default function Router() {
  return (
    <Switch>
      {routes.map((route) => {
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
