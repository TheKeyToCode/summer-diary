import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>Если вы увидели данное сообщение это значит что проект запустился Хоят бы в начале</div>
    <App />
    <div>Если вы увидели данное сообщение это значит что проект запустился без критических ошибок.</div>
  </StrictMode>,

)
