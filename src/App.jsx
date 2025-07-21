import { useEffect, useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import HomePage from './components/HomePage.jsx'
import PostPage from './components/PostPage.jsx'
import { getCollection } from './services/api';
import { correctURL } from './services/img';
import SashaPage from './components/SashaPage.jsx';
import SlavaPage from './components/SlavaPage.jsx';
import KirillPage from './components/KirillPage.jsx';
import AlekseyPage from './components/AlekseyPage.jsx';
function App() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post/:slug" element={<PostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/sasha" element={<SashaPage />}/>
                    <Route path="/slava" element={<SlavaPage />}/>
                    <Route path="/kirill" element={<KirillPage />}/>
                    <Route path="/alexei" element={<AlekseyPage />}/>
                </Routes>
            </BrowserRouter>            
        </>
    )
}

export default App
