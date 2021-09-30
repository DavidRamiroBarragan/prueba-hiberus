import { Layout } from 'antd'

import useNotifications from 'hooks/useNotifications/useNotifications'
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

function App() {
  const { Header, Footer, Content } = Layout
  useNotifications()
  const dispatch = useAuthDispatch()
  const { isLogged } = useAuthContext()

  useEffect(() => {
    if (isLogged) {
      return
    }
    const userSession = getLocalStorageData()
    if (userSession) {
      dispatch(setUser(userSession))
    }
  }, [dispatch, isLogged])

  return (
    <>
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
    </>
  )
}

export default App
