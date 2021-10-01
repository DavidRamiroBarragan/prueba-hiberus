import { Layout as AntDLayout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { getLocalStorageData } from 'utils/token'
import { setUser } from 'core/reducers/authReducer/actions'
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch'
import { useAuthContext } from 'hooks/useAuthContext/useAuthContext'
import Notifications from 'components/ResponseInterceptor/ResponseInterceptor'
import { Http } from 'core/api/http'
import Navbar from 'components/Navbar/Navbar'
import Routes from 'components/Router/Router'
import './Layout.scss'

function Layout() {
  const { Header, Footer, Content } = AntDLayout
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
        <Header className='header'>
          <Navbar isLogged={isLogged} />
        </Header>
        <Content className='container'>
          <Routes />
        </Content>
        <Footer className='footer'>Prueba Hiberus David Ramiro</Footer>
      </Router>
    </Notifications>
  )
}

export default Layout
