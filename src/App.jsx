import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import PostPage from './components/PostPage.jsx';   
import MainPage from "./components/MainPage.jsx"
import PostList from './components/PostList.jsx'
import Event from './components/Event.jsx'
import About from './components/About.jsx'
import Appoarch from './components/Appoarch.jsx'
import HowGet from './components/HowGet.jsx'
import Formats from './components/Formats.jsx'
import Masters from './components/Masters.jsx'
import Timeline from './components/Timeline.jsx'
import CommentPage from './components/CommentPage.jsx'
import Alexey from './components/Alexey.jsx'
import Registration from './components/Registration.jsx'

function App() {
    return (
        
            <BrowserRouter>
                <div className='min-h-[90vh]'>
                    <Routes>
                            <Route path="/" element={<><Head /><MainPage /><PostList /><Event /><Masters /><Formats /><Timeline /><About /><Appoarch /><HowGet /><Foot /></>} />
                            <Route path="/post/:slug" element={ <><Head /><PostPage/><Foot /></>} />
                            <Route path="/comment/:slug" element={ <><Head /><CommentPage /><Foot /></>} />
                            <Route path="/postpage" element={<><PostPage /></>} />
                            <Route path="/alexey" element={<><Alexey /><Foot /></>} />
                            <Route path="/reg" element={<><Head /><Registration /><Foot /></>} />
                            <Route path="*" element={<><NotFoundPage /></>} />
                    </Routes>
                </div>
            </BrowserRouter>
      
    )
}

export default App
