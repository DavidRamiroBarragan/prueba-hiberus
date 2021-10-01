import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Form, Input } from 'antd'

export default function PasswordField({ name, rules, label, ...rest }) {
  return (
    <Form.Item label={label} name={name} rules={rules} {...rest}>
      <Input.Password
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  )
}
