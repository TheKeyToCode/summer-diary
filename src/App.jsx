import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import PostPage from './components/PostPage.jsx';   
import MainPage from "./components/MainPage.jsx"
import { ErrorBoundary } from 'react-error-boundary'
import PostList from './components/PostList.jsx'

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='min-h-[90vh]'>
                    <Routes>
                        
                            <Route path="/" element={<ErrorBoundary><Head /><MainPage /><PostList /><Foot /></ErrorBoundary>} />
                            <Route path="/post/:slug" element={ <ErrorBoundary><Head /><PostPage/><Foot /></ErrorBoundary>} />
                            <Route path="*" element={<ErrorBoundary><NotFoundPage /></ErrorBoundary>} />
                            <Route path="/postpage" element={<ErrorBoundary><PostPage /></ErrorBoundary>} />
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App
