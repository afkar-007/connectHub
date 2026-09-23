
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTop from './Pages/ScrollToTop'
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')).render(

 <BrowserRouter>
 <ScrollToTop/>
    <App />
 </BrowserRouter>
  
)
