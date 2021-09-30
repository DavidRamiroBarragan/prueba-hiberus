import {
  initialAuthReducer,
  AuthReducer,
} from 'core/reducers/authReducer/authReducer'

import { createContext, useReducer } from 'react'

export const AuthStateContext = createContext()
export const AuthDispatchContext = createContext()

export const AuthProvider = ({ children }) => {
  const [{ isLogged, user }, dispatch] = useReducer(
    AuthReducer,
    initialAuthReducer
  )

  return (
    <AuthStateContext.Provider value={{ isLogged, user }}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}
