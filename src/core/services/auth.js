import {
  setLocalStorageToken,
  removeLocalStorageToken,
} from '../../utils/token'
import { Http } from '../api/http'

export async function login({ email, password }, config) {
  try {
    let user
    const token = await Http.post('/auth/log-in', { email, password }, config)
    Http.setToken(token.data.accessToken)

    if (token) {
      user = await Http.get('/users/me', config)
      setLocalStorageToken({ token: token.data.accessToken, user: user.data })
    }
    return user.data
  } catch (e) {
    return false
  }
}

export function logout() {
  removeLocalStorageToken()
}

export async function signUp({ email, password, name, surname }, config) {
  await Http.post(
    '/auth/sign-up',
    {
      email,
      password,
      name,
      surname,
    },
    config
  )
}
