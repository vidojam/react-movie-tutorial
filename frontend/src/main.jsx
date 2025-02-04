import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowswerRouter>
    
        <Route path="/" element={<App />} />
    
    </BrowswerRouter>
  </StrictMode>,
)
