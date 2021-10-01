import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN,
})

const cancelToken = axios.CancelToken

function setToken(token) {
  // eslint-disable-next-line dot-notation
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

function get(url, config) {
  return instance.get(url, config)
}
function post(url, data, config) {
  return instance.post(url, data, config)
}

function put(url, data, config) {
  return instance.put(url, data, config)
}

function patch(url, data, config) {
  return instance.patch(url, data, config)
}

function _delete(url, config) {
  return instance.delete(url, config)
}

function requestInterceptor(onFulfilled, onRejected) {
  return instance.interceptors.request.use(onFulfilled, onRejected)
}

function responseInterceptor(onFulfilled, onRejected) {
  return instance.interceptors.response.use(onFulfilled, onRejected)
}

export const Http = {
  setToken,
  instance,
  get,
  post,
  put,
  patch,
  delete: _delete,
  requestInterceptor,
  responseInterceptor,
  cancelToken,
}
