import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProviderContext } from './context/ProviderContext'
import './style/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>,
)
