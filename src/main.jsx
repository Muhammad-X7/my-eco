import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '/src/index.css';
import App from './App.jsx';

// Context provider for cart functionality (state management)
import { CartProvider } from '../products/CreateContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* CartProvider wraps the App so all components can access cart state */}
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
