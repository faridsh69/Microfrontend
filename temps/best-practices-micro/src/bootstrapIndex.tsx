import React from 'react'
import ReactDOM from 'react-dom/client'
import { MicroRouter } from './MicroRouter'

ReactDOM.createRoot(document.getElementById('micro-root')!).render(
  <React.StrictMode>
    {/* 1 Micro Index */}
    <MicroRouter />
  </React.StrictMode>,
)
