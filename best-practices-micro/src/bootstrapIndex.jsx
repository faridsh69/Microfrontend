import React from 'react'
import ReactDOM from 'react-dom/client'

import { Test } from './Test'

ReactDOM.createRoot(document.getElementById('micro-root')).render(
  <React.StrictMode>
    1 Micro Index
    <Test />
  </React.StrictMode>,
)
