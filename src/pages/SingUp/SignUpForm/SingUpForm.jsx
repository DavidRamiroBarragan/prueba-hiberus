import { useCallback, useMemo } from 'react'
import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import PasswordField from 'components/PasswordField/PasswordField'
import CommonField from 'components/CommonField/CommonField'
import { FORM_VALIDATION, validateStatus } from 'utils/forms'

export default function SingUpForm({ handleOnSubmit }) {
  const [form] = Form.useForm()
  const { getFieldsError, getFieldValue } = form
  const passwordValidator = useCallback(
    (rule, value) => {
      if (value && value !== getFieldValue('password')) {
        throw new Error('The two inputs are inconsistent!')
      }
      return Promise.resolve()
    },
    [getFieldValue]
  )

  const validateField = useMemo(
    () => validateStatus({ getFieldsError, getFieldValue }),
    [getFieldsError, getFieldValue]
  )
  return (
    <Form form={form} onFinish={handleOnSubmit} layout='vertical'>
      <CommonField
        label='Nombre'
        name='name'
        rules={[FORM_VALIDATION.NAME_REQUIRED]}
        validateStatus={validateField('name')}
        hasFeedback
        initialValue=''
        placeholder='Nombre'
      />
      <CommonField
        label='Apellidos'
        name='surname'
        rules={[FORM_VALIDATION.SURNAME_REQUIRED]}
        validateStatus={validateField('surname')}
        hasFeedback
        placeholder='Apellidos'
        initialValue=''
      />
      <CommonField
        label='E-mail'
        name='email'
        rules={[FORM_VALIDATION.EMAIL_FORMAT, FORM_VALIDATION.EMAIL_REQUIRED]}
        validateStatus={validateField('email')}
        placeholder='user@domain.com'
        hasFeedback
      />
      <PasswordField
        label='Contraseña'
        name='password'
        rules={[
          FORM_VALIDATION.PASSWORD_FORMAT,
          FORM_VALIDATION.PASSWORD_REQUIRED,
        ]}
        validateStatus={validateField('password')}
        hasFeedback
        initialValue=''
        help='Mínimo 8 caracteres, al menos una letra mayúsculas y un número'
      />
      <PasswordField
        label='Confirma tu Contraseña'
        name='confirmPassword'
        rules={[
          FORM_VALIDATION.PASSWORD_REQUIRED_CONFIRM,
          FORM_VALIDATION.PASSWORD_CHECK_CONFIRM(passwordValidator),
        ]}
        validateStatus={validateField('confirmPassword')}
        hasFeedback
        initialValue=''
      />
      <Button type='primary' htmlType='submit' className='login-form__button'>
        Registro
      </Button>
      <Link to='login'>Ya tienes usuario, haz click aquí</Link>
    </Form>
  )
}
