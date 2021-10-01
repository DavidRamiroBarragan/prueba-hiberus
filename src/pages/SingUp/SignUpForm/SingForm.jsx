import { Button, Form } from 'antd'
import { FORM_VALIDATION, validateStatus } from 'utils/forms'
import { useCallback, useMemo } from 'react'
import PasswordField from 'components/PasswordField/PasswordField'
import CommonField from 'components/CommonField/CommonField'
import { Link } from 'react-router-dom'

export default function SingForm({ handleOnSubmit }) {
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
        label='Name'
        name='name'
        rules={[FORM_VALIDATION.NAME_REQUIRED]}
        validateStatus={validateField('name')}
        hasFeedback
        initialValue=''
      />
      <CommonField
        label='Surname'
        name='surname'
        rules={[FORM_VALIDATION.SURNAME_REQUIRED]}
        validateStatus={validateField('surname')}
        hasFeedback
        placeholder='surname'
        initialValue=''
      />
      <CommonField
        label='E-mail'
        name='email'
        rules={[FORM_VALIDATION.EMAIL_FORMAT, FORM_VALIDATION.EMAIL_REQUIRED]}
        validateStatus={validateField('email')}
        hasFeedback
      />
      <PasswordField
        label='Password'
        name='password'
        rules={[
          FORM_VALIDATION.PASSWORD_FORMAT,
          FORM_VALIDATION.PASSWORD_REQUIRED,
        ]}
        validateStatus={validateField('password')}
        hasFeedback
        initialValue=''
        help='Minimum eight characters, at least one uppercase letter, one
            lowercase letter and one number'
      />
      <PasswordField
        label='Confirm Password'
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
