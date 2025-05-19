// @ts-nocheck

import { memo, useState } from 'react'
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { ADMIN_SIDEBAR_ITEMS } from 'src/configs/constants'
import { toFormalCase } from 'src/helpers/common'
import { useCrud } from 'src/hooks/useCrud'
import { useHistory } from 'react-router-dom'

const AdminSidebar = props => {
  const { drawerWidth } = props

  const [mobileOpen, setMobileOpen] = useState(false)
  const history = useHistory()
  const navigate = url => {
    history.push(url)
  }

  useCrud('category')
  useCrud('tag')

  const handleNavigate = route => {
    navigate('/timer/users')
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <Toolbar />
      <List>
        {ADMIN_SIDEBAR_ITEMS.map(item => {
          const ItemIcon = item.icon
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.title)}>
                <ListItemIcon>
                  <ItemIcon />
                </ListItemIcon>
                <ListItemText primary={toFormalCase(item.title)} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
  )

  return (
    <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        // container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default memo(AdminSidebar)
