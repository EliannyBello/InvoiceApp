import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InvoceAPP from './components/InvoiceAPP.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InvoceAPP/>
  </StrictMode>,
)
