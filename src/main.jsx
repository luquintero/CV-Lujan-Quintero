import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/base.css';
import './styles/layout.css';
import './styles/header.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/responsive.css';
import './styles/contactInfo.css';
import './styles/education.css';
import './styles/skills.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
