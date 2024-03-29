// @ts-nocheck

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { API_KEY_MAP } from 'src/configs/service'
import { TypeUseCrud } from 'src/interfaces'
import { errorHandler } from 'src/helpers/errorHandler'

export const useCrud: TypeUseCrud = MODEL_SLUG => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()

  const { listApi, createApi, updateApi, deleteApi } = API_KEY_MAP[MODEL_SLUG] || {}

  const { data, isFetching } = useQuery({
    queryKey: [MODEL_SLUG],
    queryFn: async () => {
      if (!listApi) return []

      const response = await listApi()

      return response.data
    },
    placeholderData: [],
  })
  const list = data || []

  const createMutation = useMutation(createApi, {
    onSuccess: response => {
      const createdModel = response.data ? response.data : response

      queryClient.setQueryData(MODEL_SLUG, list => {
        if (list) {
          return [...list, createdModel]
        }

        return [createdModel]
      })
      toast.success(t(MODEL_SLUG + ' created successfully'))
    },
  })

  useQuery({ queryKey: ['oldUpdatedItem'], queryFn: () => null })

  // const debouncedUpdateApi = useDebounceMethodWithPromise(updateApi)
  const updateMutation = useMutation(updateApi, {
    onMutate: updatingItem => {
      queryClient.setQueryData(MODEL_SLUG, list =>
        list.map(item =>
          item.id !== updatingItem.id
            ? item
            : {
                ...item,
                ...updatingItem,
              },
        ),
      )

      // ['todos', newTodo.id]
      const oldUpdatedItem = queryClient.getQueryData('oldUpdatedItem')
      if (oldUpdatedItem) return oldUpdatedItem

      const oldItem = list.find(item => item.id === updatingItem.id)
      queryClient.setQueryData('oldUpdatedItem', () => oldItem)

      return oldItem
    },
    onSuccess: response => {
      const updatedData = response.data ? response.data : response
      queryClient.setQueryData(MODEL_SLUG, list =>
        list.map(item => (item.id === updatedData.id ? updatedData : item)),
      )
      toast.success(t(MODEL_SLUG + ' updated successfully'))
      // ['todos', newTodo.id]
      queryClient.setQueryData('oldUpdatedItem', () => null)
    },
    onError: (error, __, oldItem) => {
      queryClient.setQueryData(MODEL_SLUG, list =>
        list.map(item => (item.id === oldItem.id ? oldItem : item)),
      )
      // ['todos', newTodo.id]
      queryClient.setQueryData('oldUpdatedItem', () => null)
      errorHandler(error)
    },
  })

  const deleteMutation = useMutation(deleteApi, {
    onSuccess: (_, id) => {
      toast.success(t(MODEL_SLUG + ' deleted successfully'))
      queryClient.setQueryData(MODEL_SLUG, list => {
        if (list) return list.filter(item => item.id !== id)
        return []
      })
    },
  })

  return {
    list,
    isFetching,
    createMutation,
    updateMutation,
    deleteMutation,
  }
}
