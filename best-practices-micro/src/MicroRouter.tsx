import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { ThemeProvider } from '@emotion/react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { createTheme } from '@mui/material'

import { REACT_QUERY_CLIENT } from './configs/service'
import Login from './components/pages/Login'
import AdminLayout from './components/pages/AdminLayout'
import { useInternetConnection } from 'src/hooks/useInternetConnection'
import { themeAtom } from 'src/contexts/themeAtom'
import { THEMES } from 'src/configs/theme'
import { MUI_LOCALES } from 'src/configs/locale'
import 'src/configs/locale'
import 'src/configs/styles'

export const MicroRouter = (props: any) => {
  const defaultHistory = createBrowserHistory()
  const { history = defaultHistory } = props

  useInternetConnection()

  const [theme] = useAtom(themeAtom)
  const { i18n } = useTranslation()
  const themeWithLocale = useMemo(
    // @ts-ignore
    () => createTheme(THEMES[theme], MUI_LOCALES[i18n.language]),
    [i18n.language, theme],
  )

  return (
    <ThemeProvider theme={themeWithLocale}>
      <QueryClientProvider client={REACT_QUERY_CLIENT}>
        <ToastContainer pauseOnFocusLoss={false} position='bottom-right' />
        <Router history={history}>
          <Switch>
            <Route path='/'>MICRO</Route>
            <Route path='/timer/login' exact>
              <Login />
            </Route>
            <Route path='/timer'>
              <AdminLayout />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
