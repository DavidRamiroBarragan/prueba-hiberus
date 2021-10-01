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
  EMAIL_FORMAT: { type: 'email', message: 'El E-Mail no es correcto!' },
  EMAIL_REQUIRED: {
    required: true,
    message: 'Por favor, introduzca su E-mail!',
  },
  NAME_REQUIRED: {
    required: true,
    message: 'Por favor, introduzca su Nombre!',
  },
  SURNAME_REQUIRED: {
    required: true,
    message: 'Por favor, introduzca su Apellido!',
  },
  PASSWORD_FORMAT: {
    message: 'La contraseña no tiene un formato correcto',
    pattern: passwordRegex,
  },
  PASSWORD_REQUIRED: {
    required: true,
    message: 'Por favor, confirma tu contraseña!',
  },
  PASSWORD_REQUIRED_CONFIRM: {
    required: true,
    message: 'Por favor, confirma tu contraseña!',
  },
  PASSWORD_CHECK_CONFIRM: (checkPassword) => ({
    validator: checkPassword,
    message: 'Las contraseñas tienen que ser iguales',
  }),
}
