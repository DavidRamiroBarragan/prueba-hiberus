import { useCallback, useEffect } from 'react'
import { notification } from 'antd'
import { Http } from 'core/api/http'
import { logout } from '../../core/services/auth'
import useAuthDispatch from '../../hooks/useAuthDispatch/useAuthDispatch'
import { logoutAction } from '../../core/reducers/authReducer/actions'

export default function ResponseInterceptor({ children }) {

  const dispatch = useAuthDispatch()
  const onSuccess = (response) => {
    return response
  }

  const onError = useCallback((error) => {
    if(error.response.status === 403 || error.response.status === 401){
      dispatch(logoutAction())
      logout()
    }
    notification.error({
      message: 'Error',
      description: 'Ups!! Algo salió mal',
    })
    return Promise.reject(error)
  },[dispatch])

  useEffect(() => {
    Http.responseInterceptor(onSuccess, onError)
  }, [onError])

  return <>{children}</>
}
