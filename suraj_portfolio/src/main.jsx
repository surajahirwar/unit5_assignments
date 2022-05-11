import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './ContextProvider/ThemeContext'
import reportWebVitals from './reportWebVitals';

import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
</React.StrictMode>,
)

reportWebVitals();