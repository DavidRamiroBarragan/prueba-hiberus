import Logout from 'pages/Logout/Logout'
import SingUp from 'pages/SingUp/SingUp'
import Users from 'pages/Users/Users'

export const routes = [
  {
    path: '/sign-up',
    isExact: true,
    isProtected: false,
    component: SingUp,
  },
  {
    path: '/users',
    isExact: true,
    isProtected: true,
    component: Users,
  },
  {
    path: '/logout',
    isExact: true,
    isProtected: true,
    component: Logout,
  },
]
