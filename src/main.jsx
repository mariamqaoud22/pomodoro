import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SettingContextPorvidar from './Context/SettingContext.jsx'

createRoot(document.getElementById('root')).render(
 
 <SettingContextPorvidar>
    <App />
  </SettingContextPorvidar>
)
