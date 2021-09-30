import { AuthStateContext } from 'core/context/auth/AuthContext'
import { useContext } from 'react'

export const useAuthContext = () => {
  const context = useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider')
  }
  return context
}
