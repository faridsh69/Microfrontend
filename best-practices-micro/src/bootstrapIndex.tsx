import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'src/App'

ReactDOM.createRoot(document.getElementById('micro-root')!).render(
  <React.StrictMode>
    1 Micro Index
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
