import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '/src/index.css'
import App from './App.jsx'
import { CartProvider } from '../products/CreateContext.jsx'; // 1. تأكد من استيراد CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 2. تغليف App بـ CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
