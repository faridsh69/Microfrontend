// import { useMemo } from 'react'
// import { useAtom } from 'jotai'
import { QueryClientProvider } from 'react-query'
// import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify'
// import { Switch, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

// import { ThemeProvider } from '@emotion/react'
// import { createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import { useInternetConnection } from 'src/hooks/useInternetConnection'
import { REACT_QUERY_CLIENT } from 'src/configs/service'
// import { MUI_LOCALES } from 'src/configs/locale'
// import { themeAtom } from 'src/contexts/themeAtom'

// import { THEMES } from 'src/configs/theme'
// import { router } from 'src/configs/router'
import 'src/configs/locale'
import 'src/configs/styles'
// import { Suspender } from './components/organisms/Suspender'
// import { Menu } from './components/pages/Menu'

// const history = createBrowserHistory()

export const App = ({ appProps }: any) => {
  console.log('1 appProps', appProps)
  // console.log('1 history', history)
  // const initialPath = appProps?.initialPath || '/'
  // const onNavigate = appProps?.onNavigate || null

  // const location = { pathname: initialPath }

  // const history = createMemoryHistory({
  //   initialEntries: [initialPath],
  // })

  // if (onNavigate) {
  //   history.listen(onNavigate)
  // }

  // const [theme] = useAtom(themeAtom)
  // const { i18n } = useTranslation()

  useInternetConnection()

  // const themeWithLocale = useMemo(
  //   // @ts-ignore
  //   () => createTheme(THEMES[theme], MUI_LOCALES[i18n.language]),
  //   [i18n.language, theme],
  // )

  return (
    // <ThemeProvider theme={themeWithLocale}>
    <div>
      6 micro frontend App
      <CssBaseline />
      <ToastContainer pauseOnFocusLoss={false} position='bottom-right' />
      <QueryClientProvider client={REACT_QUERY_CLIENT}>
        {/* <Switch>
          <Route path=''>
            <Menu />
          </Route>
          <Route path='login'>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              Login
              <br />
            </div>
            <Suspender pageName='Login' guest />
          </Route>
        </Switch> */}

        {/* <RouterProvider router={router} /> */}
      </QueryClientProvider>
    </div>
    // </ThemeProvider>
  )
}
