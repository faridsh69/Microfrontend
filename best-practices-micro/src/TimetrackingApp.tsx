import { MicroRouter } from './MicroRouter'
import { createBrowserHistory, createMemoryHistory } from 'history'

export default function TimetrackingApp({ appProps }: any) {
  const { initialPath = '/', onNavigate } = appProps

  const history =
    createBrowserHistory() ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  console.log('1 appProps', appProps)
  return (
    <div>
      5.1 micro frontend TimetrackingApp
      <MicroRouter />
    </div>
  )
}
