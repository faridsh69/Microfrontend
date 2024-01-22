import { QueryClient } from 'react-query'

import { createUser, deleteUser, getUsers, updateUser } from 'src/services/apis'
import { errorHandler } from 'src/helpers/errorHandler'
import { TypeApiKeyMap } from 'src/interfaces'

export const REACT_QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 10 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
      onError: errorHandler,
    },
    mutations: {
      onError: errorHandler,
    },
  },
})

export const API_KEY_MAP: TypeApiKeyMap = {
  users: {
    listApi: getUsers,
    createApi: createUser,
    updateApi: updateUser,
    deleteApi: deleteUser,
  },
}
