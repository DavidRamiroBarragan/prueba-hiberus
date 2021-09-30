const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const validateStatus =
  ({ getFieldsError, getFieldValue }) =>
  (field) => {
    if (!getFieldValue(field)) {
      return
    }
    return getFieldsError().some(({ name }) => name[0] === field)
      ? 'error'
      : 'success'
  }

export const FORM_VALIDATION = {
  EMAIL_FORMAT: { type: 'email', message: 'The input is not valid E-mail!' },
  EMAIL_REQUIRED: {
    required: true,
    message: 'Please input your E-mail!',
  },
  NAME_REQUIRED: {
    required: true,
    message: 'Please input your Name!',
  },
  SURNAME_REQUIRED: {
    required: true,
    message: 'Please input your Surname!',
  },
  PASSWORD_FORMAT: {
    message: 'Password has no valid format',
    pattern: passwordRegex,
  },
  PASSWORD_REQUIRED: {
    required: true,
    message: 'Please confirm your password!',
  },
  PASSWORD_REQUIRED_CONFIRM: {
    required: true,
    message: 'Please confirm your password!',
  },
  PASSWORD_CHECK_CONFIRM: (checkPassword) => ({
    validator: checkPassword,
    message: 'Passwords has to be equals',
  }),
}
