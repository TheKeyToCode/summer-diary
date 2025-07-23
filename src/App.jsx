import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import HomePage from './components/HomePage.jsx'
import Head from './components/Head.jsx'
import Foot from './components/Foot.jsx'
import PostPage from './components/PostPage.jsx';   
// import TestPage from "./components/TestPage.jsx";
import Hero from "./components/Hero.jsx"
import { ErrorBoundary } from 'react-error-boundary'
import MainThing from './components/MainThing.jsx'
//const isDarkTheme = useTheme().palette.type === 'dark';
////////////////////////////////////////////////////////////////////
function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='min-h-[90vh]'>
                    <Routes>
                        
                            <Route path="/" element={<ErrorBoundary><Head /><HomePage /><Foot /></ErrorBoundary>} />
                            <Route path="/post/:slug" element={ <ErrorBoundary><Head /><PostPage/><Foot /></ErrorBoundary>} />
                            {/* <Route path="/testPage" element={<ErrorBoundary><Head /><TestPage /><Foot /></ErrorBoundary>} /> */}
                            {/* <Route path="/hero" element={<ErrorBoundary><Head /><Hero /><Foot /></ErrorBoundary>} /> */}
                            <Route path="mainthing" element={<ErrorBoundary><Head /><MainThing /><Foot /></ErrorBoundary>} />
                            <Route path="*" element={<ErrorBoundary><NotFoundPage /></ErrorBoundary>} />
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App
