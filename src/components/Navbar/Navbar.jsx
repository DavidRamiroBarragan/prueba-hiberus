import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
export default function Navbar({ isLogged }) {
  return (
    <Menu mode='horizontal' theme='dark'>
      {isLogged && (
        <>
          <Menu.Item key='logout'>
            <NavLink to='/logout'>Logout</NavLink>
          </Menu.Item>
          <Menu.Item key='users'>
            <NavLink to='/users'>Users</NavLink>
          </Menu.Item>
        </>
      )}
    </Menu>
  )
}
