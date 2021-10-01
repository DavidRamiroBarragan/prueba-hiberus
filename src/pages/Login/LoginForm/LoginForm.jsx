import { FORM_VALIDATION } from 'utils/forms'
import PasswordField from 'components/PasswordField/PasswordField'
import CommonField from 'components/CommonField/CommonField'
import { Link } from 'react-router-dom'
import { Button, Form } from 'antd'

function LoginForm({ handleOnSubmit }) {
  const [form] = Form.useForm()
  return (
    <Form form={form} onFinish={handleOnSubmit} layout='vertical'>
      <CommonField
        label='Email'
        name='email'
        rules={[FORM_VALIDATION.EMAIL_FORMAT, FORM_VALIDATION.EMAIL_REQUIRED]}
      />
      <PasswordField
        name='password'
        label='Password'
        rules={[FORM_VALIDATION.PASSWORD_REQUIRED]}
        initialValue=''
      />
      <Button type='primary' htmlType='submit' className='login-form__button'>
        Iniciar Sesión
      </Button>
      <Link to='sign-up'>Registrate</Link>
    </Form>
  )
}

export default LoginForm
