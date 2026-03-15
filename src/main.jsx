import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Layout/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>

)
