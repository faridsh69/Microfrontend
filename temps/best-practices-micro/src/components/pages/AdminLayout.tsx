// @ts-nocheck

import { Box } from '@mui/material'

import { PageLayout } from 'src/components/templates/PageLayout'
import MemoAdminSidebar from 'src/components/templates/AdminSidebar'
import AdminList from './AdminList'
import { Route } from 'react-router-dom'
import AdminForm from './AdminForm'

const AdminLayout = () => {
  const drawerWidth = 240

  return (
    <PageLayout>
      <Box sx={{ display: 'flex', mt: 5 }}>
        <MemoAdminSidebar drawerWidth={drawerWidth} />
        <Box
          component='main'
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Route path='/timer/:model' exact>
            <AdminList />
          </Route>
          <Route path='/timer/:model/create'>
            <AdminForm />
          </Route>
          <Route path='/timer/:model/:id/edit'>
            <AdminForm />
          </Route>
        </Box>
      </Box>
    </PageLayout>
  )
}

export default AdminLayout
