import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import useAuthContext from 'hooks/useAuthContext/useAuthContext'

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isLogged } = useAuthContext()
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...rest} {...props} /> : <Redirect to='/' />
      }
    />
  )
}
