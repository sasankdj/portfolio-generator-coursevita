import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './components/AuthContext.jsx'
import { PortfolioProvider } from './components/PortfolioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PortfolioProvider>
        <App />
      </PortfolioProvider>
    </AuthProvider>
  </StrictMode>,
)
