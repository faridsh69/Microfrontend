import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { QueryClientProvider } from 'react-query'
import { REACT_QUERY_CLIENT } from './configs/service'
import Login from './components/pages/Login'

import AdminLayout from './components/pages/AdminLayout'
import { ToastContainer } from 'react-toastify'
import 'src/configs/locale'
import 'src/configs/styles'

export const MicroRouter = (props: any) => {
  const defaultHistory = createBrowserHistory()
  const { history = defaultHistory } = props

  return (
    <QueryClientProvider client={REACT_QUERY_CLIENT}>
      <ToastContainer pauseOnFocusLoss={false} position='bottom-right' />
      <Router history={history}>
        <Switch>
          <Route path='/timer/login' exact>
            <Login />
          </Route>
          <Route path='/timer'>
            <AdminLayout />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}
