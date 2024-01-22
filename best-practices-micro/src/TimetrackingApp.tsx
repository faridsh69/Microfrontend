import { App } from 'src/App'

export default function TimetrackingApp({ appProps }: any) {
  return (
    <div>
      4 micro frontend TimetrackingApp
      {/* <MemoryRouter> */}
      <App appProps={appProps} />
      {/* </MemoryRouter> */}
    </div>
  )
}
