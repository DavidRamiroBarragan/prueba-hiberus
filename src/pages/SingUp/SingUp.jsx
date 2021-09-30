import { Button, Col, Form, Row, Typography } from 'antd'
import { signUp } from '../../services/auth'
import { useHistory } from 'react-router'
import { FORM_VALIDATION, validateStatus } from 'utils/forms'
import { useMemo } from 'react'
import PasswordField from 'components/PasswordField/PasswordField'
import CommonField from 'components/CommonField/CommonField'
import { Link } from 'react-router-dom'
import './SingUp.scss'

const SingUpPage = () => {
  const [form] = Form.useForm()
  const history = useHistory()
  const { Text } = Typography
  const { getFieldsError, getFieldValue } = form

  const handleOnSubmit = (data) => {
    delete data.confirmPassword
    signUp(data)
    history.replace('/')
  }

  const passwordValidator = (rule, value) => {
    if (value && value !== getFieldValue('password')) {
      throw new Error('The two inputs are inconsistent!')
    }
    return Promise.resolve()
  }

  const validateField = useMemo(
    () => validateStatus({ getFieldsError, getFieldValue }),
    [getFieldsError, getFieldValue]
  )

  return (
    <Row justify='center' align='center'>
      <Col xs={24} sm={18} md={18} xl={10}>
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
            rules={[
              FORM_VALIDATION.EMAIL_FORMAT,
              FORM_VALIDATION.EMAIL_REQUIRED,
            ]}
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
          />
          <Text type='secondary'>
            Minimum eight characters, at least one uppercase letter, one
            lowercase letter and one number
          </Text>
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
          <Button
            type='primary'
            htmlType='submit'
            className='login-form__button'>
            Registro
          </Button>
          <Link to='login'>Ya tienes usuario, haz click aquí</Link>
        </Form>
      </Col>
    </Row>
  )
}

export default SingUpPage
