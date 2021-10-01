export function getLocalStorageData() {
  const token = localStorage.getItem('data')
  return JSON.parse(token)
}

export function setLocalStorageToken(data) {
  const dataStringify = JSON.stringify(data)
  localStorage.setItem('data', dataStringify)
}

export function removeLocalStorageToken() {
  localStorage.removeItem('data')
}
