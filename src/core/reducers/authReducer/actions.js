import { AUTH_ACTIONS } from './constants'

export const setUser = (user) => ({
  type: AUTH_ACTIONS.LOGIN,
  payload: user,
})

export const logoutAction = () => ({
  type: AUTH_ACTIONS.LOGOUT,
})
