import React from "react";
import './index.css';  
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>    
    <App />
    </BrowserRouter>

  </StrictMode>,
)
