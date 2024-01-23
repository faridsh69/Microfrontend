import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { FOOD_SCHEMA, USERS_SCHEMA } from 'src/configs/schemas'

import { useCrud } from 'src/hooks/useCrud'
import { CheckBoxController } from 'src/components/organisms/controllers/CheckboxController'
// import { EditorController } from 'src/components/organisms/controllers/EditorController'
import { SelectController } from 'src/components/organisms/controllers/SelectController'
import { FormMui } from 'src/components/organisms/FormMui'
import { Loading } from 'src/components/molecules/Loading'

const AdminForm = () => {
  const { t } = useTranslation()

  // @ts-ignore
  const { model, id } = useParams()

  const modelId = +id

  const { list, createMutation, updateMutation } = useCrud(model)

  const categoryOptions = useMemo(() => {
    return [
      { id: 1, title: 'test 1' },
      { id: 2, title: 'test 2' },
    ].map(c => ({
      value: c.id,
      label: c.title,
    }))
  }, [])

  console.log('1 list', list)
  // @ts-ignore
  const modelObject = useMemo(() => list.find(item => item?.id === modelId), [list, modelId])

  const onSubmit = (data: any) => {
    if (id) {
      updateMutation.mutate(data)
    } else {
      createMutation.mutate(data)
    }
  }

  if (id && !modelObject) return <Loading />

  return (
    <FormMui
      schema={model === 'users' ? USERS_SCHEMA : FOOD_SCHEMA} // @TODO 1 change it for each model
      onSubmit={onSubmit}
      submitText={id ? t('Update') : t('Create')}
      defaultValues={modelObject}
      inputs={
        model === 'users'
          ? [
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
              // @TODO 2 change it for each model
              {
                name: 'title',
              },
              {
                name: 'category_id',
                component: SelectController,
                options: categoryOptions,
              },

              {
                name: 'url',
              },
              {
                name: 'price',
                type: 'number',
              },
              {
                name: 'discount_price',
                type: 'number',
              },
              {
                name: 'description',
                multiline: true,
                rows: 3,
              },
              {
                component: CheckBoxController,
                name: 'activated',
              },
              {
                name: 'calorie',
                type: 'number',
              },
              // {
              //   name: 'content',
              //   component: EditorController,
              // },
            ]
      }
    />
  )
}

export default AdminForm
