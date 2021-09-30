import { Form, Input } from 'antd'
export default function EmailField({
  name,
  rules,
  label,
  placeholder,
  ...rest
}) {
  return (
    <Form.Item label={label} name={name} rules={rules} {...rest}>
      <Input placeholder={placeholder} />
    </Form.Item>
  )
}
