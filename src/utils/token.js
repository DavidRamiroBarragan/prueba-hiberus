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
  const dataStrigiFy = JSON.stringify(data)
  localStorage.setItem('data', dataStrigiFy)
}

export function removeLocalStorageToken() {
  localStorage.removeItem('data')
}
