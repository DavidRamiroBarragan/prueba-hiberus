import { setLocalStorageToken, removeLocalStorageToken } from '../utils/token'
import { Http } from './http'

export async function login({ email, password }) {
  try {
    let user
    const token = await Http.post('/auth/log-in', { email, password })
    Http.setToken(token.data.accessToken)

    if (token) {
      user = await Http.get('/users/me')
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

export async function signUp({ email, password, name, surname }) {
  await Http.post('/auth/sign-up', {
    email,
    password,
    name,
    surname,
  })
}
