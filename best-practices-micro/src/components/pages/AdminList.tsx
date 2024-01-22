// @ts-nocheck

import { useCallback } from 'react'
import { useHistory, useNavigate, useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { useCrud } from 'src/hooks/useCrud'
import { TableMui } from 'src/components/organisms/TableMui'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const AdminList = () => {
  const { t } = useTranslation()

  const history = useHistory()
  const navigate = url => {
    history.push(url)
  }

  const { model = 'users' } = useParams()

  const { list, deleteMutation } = useCrud(model)
  console.log('1 list', list)

  const handleDelete = useCallback(
    id => {
      deleteMutation.mutate(id)
    },
    [deleteMutation],
  )

  const handleEdit = id => navigate(`/timer/${model}/${id}/edit`)

  const headCells =
    model === 'users'
      ? [
          {
            id: 'id',
            numeric: true,
            disablePadding: true,
            label: 'ID',
          },
          {
            id: 'email',
            numeric: false,
            label: 'Email',
          },
          {
            id: 'first name',
            numeric: false,
            label: 'First Name',
          },
          {
            id: 'last name',
            numeric: false,
            label: 'Last Name',
          },
        ]
      : [
          {
            id: 'id',
            numeric: true,
            disablePadding: true,
            label: 'ID',
          },
          {
            id: 'title',
            numeric: false,
            label: 'Title',
          },
          {
            id: 'price',
            numeric: true,
            label: 'Price',
          },
          {
            id: 'description',
            numeric: false,
            label: 'Food Content',
          },
          // {
          //   id: 'activated',
          //   numeric: false,
          //   label: 'Available',
          // },
          {
            id: 'url',
            numeric: false,
            label: 'Url',
          },
          {
            id: 'actions',
            numeric: false,
            label: 'Actions',
          },
          // category_id, created_at, updated_at
        ]

  const bodyCells =
    model === 'users'
      ? [
          {
            name: 'id',
          },
          {
            name: 'email',
          },
          {
            name: 'first_name',
          },
          {
            name: 'last_name',
          },
        ]
      : [
          {
            name: 'id',
          },
          {
            name: 'title',
          },
          {
            name: 'price',
          },
          {
            name: 'description',
          },
          // {
          //   name: 'activated',
          // },
          {
            name: 'url',
          },
        ]

  return (
    <Box>
      <Button component={Link} to={`/timer/${model}/create`}>
        {t('Create New Record')}
      </Button>
      <TableMui
        list={list}
        headCells={headCells}
        bodyCells={bodyCells}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </Box>
  )
}

export default AdminList
