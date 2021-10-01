import { AUTH_ACTIONS } from './constants'

export const setUser = (user, isLogged) => ({
  type: AUTH_ACTIONS.LOGIN,
  payload: { user, isLogged },
})

export const logoutAction = () => ({
  type: AUTH_ACTIONS.LOGOUT,
})
