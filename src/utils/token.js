export function getLocalStorageToken() {
  const token = localStorage.getItem('data')

  if (!token) {
    throw new Error("Token don't exists")
  }

  const dataParse = JSON.parse(token)

  return dataParse.token
}

export function getLocalStorageData() {
  const token = localStorage.getItem('data')

  const dataParse = JSON.parse(token)

  return dataParse
}

export function setLocalStorageToken(data) {
  const dataStringify = JSON.stringify(data)
  localStorage.setItem('data', dataStringify)
}

export function removeLocalStorageToken() {
  localStorage.removeItem('data')
}
