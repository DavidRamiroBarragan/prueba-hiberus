import { Button } from 'antd'
import { logoutAction } from 'core/reducers/authReducer/actions'
import { useAuthContext } from 'hooks/useAuthContext/useAuthContext'
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch'
import { Redirect } from 'react-router'

function Logout() {
  const dispatch = useAuthDispatch()
  const { isLogged } = useAuthContext()

  const handleOnClick = () => {
    dispatch(logoutAction())
  }

  if (!isLogged) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <Button type='primary' danger onClick={handleOnClick}>
        Cerrar Sesión
      </Button>
    </div>
  )
}

export default Logout
