import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from 'src/App'

ReactDOM.createRoot(document.getElementById('micro-root')!).render(
  <React.StrictMode>
    1 Micro Index
    <App />
  </React.StrictMode>,
)
