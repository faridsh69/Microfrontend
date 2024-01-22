import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Menu } from './components/pages/Menu'
import { Suspender } from './components/organisms/Suspender'
import { QueryClientProvider } from 'react-query'
import { REACT_QUERY_CLIENT } from './configs/service'

export const MicroRouter = () => {
  return (
    <QueryClientProvider client={REACT_QUERY_CLIENT}>
      <Router>
        <Switch>
          <Route path='/timer' exact>
            <Menu />
          </Route>
          <Route path='/timer/login'>
            <Suspender pageName='Login' guest />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}
