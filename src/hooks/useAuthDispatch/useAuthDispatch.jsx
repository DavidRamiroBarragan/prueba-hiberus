import { useContext } from 'react'
import { AuthDispatchContext } from 'core/context/auth/AuthContext'

export default function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext)
  if (dispatch === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider')
  }
  return dispatch
}
