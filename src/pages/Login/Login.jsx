import { Button, Form } from 'antd'
import { login } from 'services/auth'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuthContext } from 'hooks/useAuthContext/useAuthContext'
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch'
import { setUser } from 'core/reducers/authReducer/actions'
import './Login.scss'
import { FORM_VALIDATION } from 'utils/forms'
import PasswordField from 'components/PasswordField/PasswordField'
import CommonField from 'components/CommonField/CommonField'

const Login = () => {
  const [form] = Form.useForm()
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
          <Form form={form} onFinish={handleOnSubmit} layout='vertical'>
            <CommonField
              label='Email'
              name='email'
              rules={[
                FORM_VALIDATION.EMAIL_FORMAT,
                FORM_VALIDATION.EMAIL_REQUIRED,
              ]}
            />
            <PasswordField
              name='password'
              label='Password'
              rules={[FORM_VALIDATION.PASSWORD_REQUIRED]}
              initialValue=''
            />
            <Button
              type='primary'
              htmlType='submit'
              className='login-form__button'>
              Iniciar Sesión
            </Button>
            <Link to='sign-up'>Registrate</Link>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
