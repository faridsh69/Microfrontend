// @ts-nocheck

import { createApiClient } from 'src/helpers/service'
import { TypeApiMethod } from 'src/interfaces'

const { REACT_APP_API_BASE_URL } = process.env

if (!REACT_APP_API_BASE_URL) {
  throw new Error('Please copy .env.example to .env.local')
}

const VITE_AUTH_API_CLIENT = createApiClient(REACT_APP_API_BASE_URL)

export const postLogin: TypeApiMethod = data =>
  VITE_AUTH_API_CLIENT.post({
    endpoint: 'oauth/token',
    data,
  })

const TEST_API_CLIENT = createApiClient(`https://reqres.in/api/users`, true)

export const getUsers: TypeApiMethod = data =>
  TEST_API_CLIENT.get({
    endpoint: '',
    data,
  })

export const createUser: TypeApiMethod = data =>
  TEST_API_CLIENT.post({
    endpoint: '',
    data,
  })

export const updateUser: TypeApiMethod = data =>
  TEST_API_CLIENT.put({
    endpoint: `id/${data.id}`,
    data,
  })

export const deleteUser: TypeApiMethod = data =>
  TEST_API_CLIENT.remove({
    endpoint: `id/${data}`,
  })
