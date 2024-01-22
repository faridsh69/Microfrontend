import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Menu } from './components/pages/Menu'
import { QueryClientProvider } from 'react-query'
import { REACT_QUERY_CLIENT } from './configs/service'
import Login from './components/pages/Login'

export const MicroRouter = (props: any) => {
  const defaultHistory = createBrowserHistory()
  const { history = defaultHistory } = props

  return (
    <QueryClientProvider client={REACT_QUERY_CLIENT}>
      <Router history={history}>
        <Switch>
          <Route path='/timer' exact>
            <Menu />
          </Route>
          <Route path='/timer/login' exact>
            <Login />
            {/* <Suspender pageName='Login' guest /> */}
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}
