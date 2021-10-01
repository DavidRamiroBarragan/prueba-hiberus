import { Col, Row } from 'antd'
import { signUp } from 'core/services/auth'
import { useHistory } from 'react-router'
import SingUpForm from './SignUpForm/SingUpForm'
import './SingUp.scss'

export default function SingUp() {
  const history = useHistory()

  const handleOnSubmit = (data) => {
    delete data.confirmPassword
    signUp(data)
    history.replace('/')
  }

  return (
    <Row justify='center' align='middle'>
      <Col xs={24} sm={18} md={18} xl={10}>
        <div className='sing-up__form-container'>
          <SingUpForm handleOnSubmit={handleOnSubmit} />
        </div>
      </Col>
    </Row>
  )
}
