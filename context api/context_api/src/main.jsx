import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartConstextProvider } from './contexts/CartContext'
// import { LangContextProvider } from './contexts/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <CartConstextProvider>
           <App />
      </CartConstextProvider>
    
  </React.StrictMode>
)
