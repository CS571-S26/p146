import { createRoot } from 'react-dom/client'
import AppRouting from './Layout/AppRouting.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AppRouting />
  </HashRouter>

)
