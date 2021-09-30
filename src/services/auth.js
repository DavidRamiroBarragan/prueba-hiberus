import { setLocalStorageToken, removeLocalStorageToken } from '../utils/token'
import { Http } from './http'

export async function login({ email, password }) {
  Http.post('/auth/log-in', { email, password })
    .then((response) => {
      Http.setToken(response.data.accessToken)
      return response
    })
    .then(async (resp) => {
      const { data: user } = await Http.get('/users/me')
      setLocalStorageToken({ token: resp.data.accessToken, user })
    })
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
