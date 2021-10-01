import { Redirect } from 'react-router'
import { login } from 'core/services/auth'
import { setUser } from 'core/reducers/authReducer/actions'
import useAuthDispatch from 'hooks/useAuthDispatch/useAuthDispatch'
import useAuthContext from 'hooks/useAuthContext/useAuthContext'
import LoginForm from './LoginForm/LoginForm'
import './Login.scss'

export default function Login() {
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
