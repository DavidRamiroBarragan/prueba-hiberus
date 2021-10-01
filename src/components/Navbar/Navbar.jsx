import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
function Navbar({ isLogged }) {
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

export default Navbar
