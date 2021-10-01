import { AuthProvider } from 'core/context/auth/AuthContext'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout/Layout'
import 'antd/dist/antd.css'
import './index.scss'

ReactDOM.render(
  <AuthProvider>
    <Layout />
  </AuthProvider>,
  document.getElementById('root')
)
