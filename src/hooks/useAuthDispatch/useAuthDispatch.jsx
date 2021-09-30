import { AuthDispatchContext } from 'core/context/auth/AuthContext'
import { useContext } from 'react'

export const useAuthDispatch = () => {
  const dispatch = useContext(AuthDispatchContext)
  if (dispatch === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider')
  }
  return dispatch
}
