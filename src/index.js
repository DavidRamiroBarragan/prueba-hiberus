import { AuthProvider } from 'core/context/auth/AuthContext'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.scss'

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
)
