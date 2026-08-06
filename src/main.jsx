import './App.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import { ThemeProvider } from './context/ThemeProvider.jsx'

import "highlight.js/styles/github.css";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <Toaster richColors position="top-right" />
  </StrictMode>,
)
