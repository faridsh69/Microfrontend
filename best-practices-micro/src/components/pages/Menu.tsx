// @ts-nocheck

import { SkeletonBox } from 'src/components/organisms/AccordionMui'
import { PageLayout } from 'src/components/templates/PageLayout'
import { useCrud } from 'src/hooks/useCrud'
import { useTranslation } from 'react-i18next'

export const Menu = () => {
  const { list: foodCategories } = useCrud('menu')

  const { t } = useTranslation()

  return (
    <PageLayout>
      {!foodCategories.length && (
        <>
          <SkeletonBox />
          <SkeletonBox />
        </>
      )}
      <br />
      <div className='categories'></div>
    </PageLayout>
  )
}

// chip for tags, relateds > click ro tag dialog baz beshe
// calorie,
