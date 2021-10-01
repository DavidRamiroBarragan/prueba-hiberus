import Logout from 'pages/Logout/Logout'
import SingUpPage from 'pages/SingUp/SingUp'
import UsersPage from 'pages/Users/Users'

export const routes = [
  {
    path: '/sign-up',
    isExact: true,
    isProtected: false,
    component: SingUpPage,
  },
  {
    path: '/users',
    isExact: true,
    isProtected: true,
    component: UsersPage,
  },
  {
    path: '/logout',
    isExact: true,
    isProtected: true,
    component: Logout,
  },
]
