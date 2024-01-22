import { MicroRouter } from './MicroRouter'

export default function TimetrackingApp({ appProps }: any) {
  console.log('1 appProps', appProps)
  return (
    <div>
      5.1 micro frontend TimetrackingApp
      <MicroRouter />
    </div>
  )
}
