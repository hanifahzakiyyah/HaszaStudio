import './style.css';
import ReactDOM from 'react-dom/client';
import { StrictMode, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Lazy load komponen agar tidak langsung dimuat semua di awal
const Bg = lazy(() => import('./komponen/Bg.jsx'));
const Home = lazy(() => import('./komponen/Home.jsx'));

const root = ReactDOM.createRoot(document.querySelector('#root'));
const isDev = process.env.NODE_ENV === "development";

function App() {
    // const location = useLocation();

    // useEffect(() => {
    //     const rootEl = document.querySelector("#root");
    //     if (location.pathname === "/3d") {
    //         rootEl.style.position = "fixed";
    //         rootEl.style.top = "0";
    //         rootEl.style.left = "0";
    //         rootEl.style.width = "100vw";
    //         rootEl.style.height = "100vh";
    //     } else {
    //         rootEl.style.position = "";
    //         rootEl.style.top = "";
    //         rootEl.style.left = "";
    //         rootEl.style.width = "";
    //         rootEl.style.height = "";
    //     }
    // }, [location.pathname]);

    return (
        <Suspense fallback={<div className="loading">Loading...</div>}>
            <Bg />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Suspense>
    );
}

root.render(
    <>
        {isDev ? <StrictMode><BrowserRouter future={{ v7_startTransition: true }}><App /></BrowserRouter></StrictMode> : <BrowserRouter future={{ v7_startTransition: true }}><App /></BrowserRouter>}
    
    </>
);
