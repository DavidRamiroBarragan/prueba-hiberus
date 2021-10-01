import { useEffect } from 'react'
import { notification } from 'antd'
import { Http } from 'core/api/http'

export default function ResponseInterceptor({ children }) {
  const onSuccess = (response) => {
    return response
  }

  const onError = (error) => {
    notification.error({
      message: 'Error',
      description: 'Ups!! Algo salió mal',
    })
    return Promise.reject(error)
  }

  useEffect(() => {
    Http.responseInterceptor(onSuccess, onError)
  }, [])

  return <>{children}</>
}
