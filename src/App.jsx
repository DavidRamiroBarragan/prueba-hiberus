import { Layout } from 'antd'
import Login from 'pages/Login/Login'
import Logout from 'pages/Logout/Logout'
import SingUpPage from 'pages/SingUp/SingUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.scss'
import ProtectedRoute from 'components/PrivateRoute/PrivateRoute'
import UsersPage from 'pages/Users/Users'
import { useEffect } from 'react'
import { getLocalStorageData } from 'utils/token'
import { setUser } from 'core/reducers/authReducer/actions'
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch'
import { useAuthContext } from 'hooks/useAuthContext/useAuthContext'
import Notifications from 'components/ResponseInterceptor/ResponseInterceptor'
import { Http } from 'core/api/http'

function App() {
  const { Header, Footer, Content } = Layout
  const dispatch = useAuthDispatch()
  const { isLogged } = useAuthContext()

  useEffect(() => {
    if (!isLogged) {
      const userSession = getLocalStorageData()
      if (userSession) {
        Http.setToken(userSession.token)
        dispatch(setUser(userSession.user, true))
      }
    }
  }, [dispatch, isLogged])

  return (
    <Notifications>
      <Router>
        <Header>{isLogged && <NavLink to='/logout'>Logout</NavLink>}</Header>
        <Content className='container'>
          <Switch>
            <Route path='/sign-up' exact component={SingUpPage} />
            <ProtectedRoute path='/users' exact component={UsersPage} />
            <ProtectedRoute path='/logout' exact component={Logout} />
            <Route path='/' component={Login} />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Router>
    </Notifications>
  )
}

export default App
