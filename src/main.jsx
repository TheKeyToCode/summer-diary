import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Head from './components/Head.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <div>Если вы увидели данное сообщение это значит что проект запустился хотя бы в начале</div> */}
    <App />
    {/* <div>Если вы увидели данное сообщение это значит что проект запустился без критических ошибок.</div> */}
  </StrictMode>,
//52
)
