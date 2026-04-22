import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"

import AppRouting from './Layout/AppRouting.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AppRouting />
  </HashRouter>
)
