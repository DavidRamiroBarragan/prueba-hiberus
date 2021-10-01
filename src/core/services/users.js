import { Http } from 'core/api/http'

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
    return await Http.delete(`/users/${id}`)
  } catch {
    return false
  }
}
