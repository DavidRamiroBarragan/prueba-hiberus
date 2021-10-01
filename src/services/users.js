import { Http } from '../core/api/http'

export async function getUsers(config) {
  try {
    const response = await Http.get('/users', config)
    return response.data
  } catch {
    return false
  }
}

export async function deleteUserById(id) {
  try {
    const response = await Http.delete(`/users/${id}`)
    return response
  } catch {
    return false
  }
}
