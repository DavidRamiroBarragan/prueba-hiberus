import { NavLink, useLocation} from 'react-router-dom'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'
export default function Navbar({ isLogged }) {
  const [current, setCurrent] = useState()
  const location = useLocation();

  useEffect(() => {
    if(location.pathname && location.pathname !== '/'){
    setCurrent(location.pathname.match(/^\/(\w+)\/*/)[1])
    }
  },[location])
  return (
    <Menu mode='horizontal' theme='dark' selectedKeys={[current]}>
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
