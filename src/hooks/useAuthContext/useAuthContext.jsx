import { useContext } from 'react'
import { AuthStateContext } from 'core/context/auth/AuthContext'
export default function useAuthContext() {
  const context = useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('AuthContext must be used within a AuthProvider')
  }
  return context
}
