// @ts-nocheck

import { Link, useHistory } from 'react-router-dom'
import { AppBar, Box, IconButton, Button, Toolbar, Typography, MenuItem, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useAuth } from 'src/hooks/useAuth'
import { getToken } from 'src/helpers/auth'
import { useState } from 'react'
import { ThemeSwitcher } from '../molecules/ThemeSwitcher'
import { LanguageSwitcher } from '../molecules/LanguageSwitcher'
import LogoutIcon from '@mui/icons-material/Logout'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

export const Navbar = () => {
  const history = useHistory()

  const navigate = url => {
    history.push(url)
  }

  const { handleLogout } = useAuth()

  const accessToken = getToken()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='fixed' sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block' } }}
          onClick={() => navigate('/timer')}
        >
          Micro frontend with React Query + Router dom and MUI
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <LanguageSwitcher />
        <ThemeSwitcher />
        {!accessToken && (
          <Button color='inherit' component={Link} to='/timer/login'>
            Login
          </Button>
        )}
        {accessToken && (
          <IconButton size='large' onClick={handleProfileMenuOpen} color='inherit'>
            <AccountCircle />
          </IconButton>
        )}
      </Toolbar>
      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ zIndex: 1201 }}
      >
        <MenuItem onClick={() => navigate('/timer')} sx={{ gap: 2 }}>
          <AdminPanelSettingsIcon />
          Admin
        </MenuItem>
        <MenuItem onClick={() => navigate('/timer/profile')} sx={{ gap: 2 }}>
          <ManageAccountsIcon />
          My Profile
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ gap: 2 }}>
          <LogoutIcon /> Logout
        </MenuItem>
      </Menu>
    </AppBar>
  )
}
