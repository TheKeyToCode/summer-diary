import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import PostPage from './components/PostPage.jsx';   
import MainPage from "./components/MainPage.jsx"
import { ErrorBoundary } from 'react-error-boundary'
import PostList from './components/PostList.jsx'
import Workshops from './components/Workshops.jsx'
import Event from './components/Event.jsx'
import About from './components/About.jsx'
import Appoarch from './components/Appoarch.jsx'
import HowGet from './components/HowGet.jsx'
import Formats from './components/Formats.jsx'
import Masters from './components/Masters.jsx'
import Timeline from './components/Timeline.jsx'
import Alexey from './components/Alexey.jsx'
import Secret from './components/Secret.jsx'


function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='min-h-[90vh]'>
                    <Routes>
                            <Route path="/" element={<ErrorBoundary><Head /><MainPage /><PostList /><Event /><Masters /><Formats /><Timeline /><About /><Appoarch /><HowGet /><Foot /></ErrorBoundary>} />
                            <Route path="/post/:slug" element={ <ErrorBoundary><Head /><PostPage/><Foot /></ErrorBoundary>} />
                            <Route path="*" element={<ErrorBoundary><NotFoundPage /></ErrorBoundary>} />
                            <Route path="/postpage" element={<ErrorBoundary><PostPage /></ErrorBoundary>} />
                            <Route path="/alexey" element={<ErrorBoundary><Alexey /><Foot /></ErrorBoundary>} />
                            <Route path="/shulker" element={<ErrorBoundary><Secret /></ErrorBoundary>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App
