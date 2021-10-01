import { useAuthContext } from 'hooks/useAuthContext/useAuthContext'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, ...rest }) => {
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

export default PrivateRoute
