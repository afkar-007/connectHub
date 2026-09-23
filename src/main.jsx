
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from './Pages/ScrollToTop.jsx';


createRoot(document.getElementById('root')).render(

 <BrowserRouter>
 <ScrollToTop/>

    <App />
 </BrowserRouter>
  
)
