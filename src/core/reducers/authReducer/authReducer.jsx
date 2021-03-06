import { logout } from 'core/services/auth'
import { AUTH_ACTIONS } from './constants'

export const initialAuthReducer = {
  isLogged: false,
  user: {},
}
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: action.payload.isLogged,
        user: action.payload.user,
      }
    case AUTH_ACTIONS.LOGOUT:
      logout()
      return {
        ...state,
        isLogged: false,
        user: {},
      }

    default:
      return state
  }
}
