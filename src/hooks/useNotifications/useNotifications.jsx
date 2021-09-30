import { useEffect } from 'react'
import { notification } from 'antd'
import { Http } from '../../services/http'

function useNotifications() {
  const onSuccess = (response) => {
    return response
  }

  const onError = (error) => {
    notification.error({
      description: error.message,
    })
    return Promise.reject(error)
  }

  useEffect(() => {
    Http.responseInterceptor(onSuccess, onError)
  }, [])
}

export default useNotifications
