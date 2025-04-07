import './style.css';
import ReactDOM from 'react-dom/client';
import { StrictMode, Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './blog/Blog.jsx';
import BlogDetail from './blog/BlogDetail.jsx';
// import clippy from 'clippyjs';
import ClippyAssistant from './ClippyAssistant.jsx';

// Lazy load komponen agar tidak langsung dimuat semua di awal
const Home = lazy(() => import('./komponen/Home.jsx'));

const root = ReactDOM.createRoot(document.querySelector('#root'));
const isDev = process.env.NODE_ENV === "development";

function App() {
    


    return (
        <Suspense fallback={<div className="loading flex justify-center items-center h-[100vh] w-[100vw] text-center">Tunggu sebentar yaaa <br /> lagi loading...</div>}>
            <ClippyAssistant />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
            </Routes>
        </Suspense>
    );
}

root.render(
    <>
        {isDev ? (
            <StrictMode>
                <BrowserRouter future={{ v7_startTransition: true }}>
                    <App />
                </BrowserRouter>
            </StrictMode>
        ) : (
            <BrowserRouter future={{ v7_startTransition: true }}>
                <App />
            </BrowserRouter>
        )}
    </>
);
