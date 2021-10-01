import { login } from 'core/services/auth'
import { Redirect } from 'react-router'
import { useAuthContext } from 'hooks/useAuthContext/useAuthContext'
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch'
import { setUser } from 'core/reducers/authReducer/actions'
import './Login.scss'
import LoginForm from './LoginForm/LoginForm'

const Login = () => {
  const { isLogged } = useAuthContext()
  const dispatch = useAuthDispatch()

  const handleOnSubmit = async (data) => {
    const user = await login(data)
    if (user) {
      dispatch(setUser(user, true))
    }
  }

  if (isLogged) {
    return <Redirect to='users' />
  }

  return (
    <div className='login__form-col'>
      <div className='login__form-row'>
        <div className='login__form-container'>
          <LoginForm handleOnSubmit={handleOnSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Login
