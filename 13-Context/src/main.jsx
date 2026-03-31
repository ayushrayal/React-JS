import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Userdata from './context/Userdata.jsx'

createRoot(document.getElementById('root')).render(
<Userdata><App/></Userdata>
)
