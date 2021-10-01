import { Popconfirm, Table, message } from 'antd'
import useFetchUser from 'hooks/useFetchUsers/useFetchUser'
import { deleteUserById } from 'services/users'

function UsersPage() {
  const [data, getUsersData] = useFetchUser()

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) =>
        data.count >= 1 ? (
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => handleDelete(record)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ]

  async function handleDelete(record) {
    const response = await deleteUserById(record.id)

    if (response.status === 204) {
      message.success('User delete successfully')
      getUsersData()
    }
  }

  return (
    data && (
      <Table
        columns={columns}
        dataSource={data.items}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 240 }}
      />
    )
  )
}

export default UsersPage
