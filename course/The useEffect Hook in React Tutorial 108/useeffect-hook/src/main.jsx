import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> is off for this lecture because it was rendering two  times code
    <App />
  // </StrictMode>,
)
