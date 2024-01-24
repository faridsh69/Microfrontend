import { MicroRouter } from './MicroRouter'
import { createBrowserHistory, createMemoryHistory } from 'history'

export default function TimetrackingApp(props: any) {
  const { appProps = {} } = props
  const { initialPath = '/', onNavigate } = appProps

  const history =
    createBrowserHistory() ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  return (
    <div>
      {/* 5.1 micro frontend TimetrackingApp */}
      <MicroRouter history={history} />
    </div>
  )
}
