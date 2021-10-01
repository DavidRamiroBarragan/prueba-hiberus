import { Popconfirm, Table, message, Typography } from 'antd'
import { deleteUserById } from 'core/services/users'
import useFetchUser from 'hooks/useFetchUsers/useFetchUser'

export default function Users() {
  const [data, getUsersData] = useFetchUser()
  const { Title } = Typography

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellidos',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Acciones',
      dataIndex: 'actions',
      render: (_, record) =>
        data.count >= 1 ? (
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => handleDelete(record)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
      key: 'actions',
    },
  ]

  async function handleDelete(record) {
    const response = await deleteUserById(record.id)

    if (response.status === 204) {
      message.success('El usuario se ha eliminado')
      getUsersData()
    }
  }

  return (
    <div className='users-container'>
      <Title>Users</Title>
      {data && (
        <Table
          columns={columns}
          dataSource={data.items}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 240 }}
        />
      )}
    </div>
  )
}
