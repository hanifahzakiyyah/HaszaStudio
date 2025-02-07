import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { StrictMode, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './komponen/Navbar.jsx'
import Bg from './komponen/Bg.jsx'
import Home from './komponen/Home.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {

    const location = useLocation()

    useEffect(()=>{
        const rootEl = document.querySelector("#root")
        if (location.pathname === "/3d"){
            rootEl.style.position = "fixed";
            rootEl.style.top = "0";
            rootEl.style.left = "0";
            rootEl.style.width = "100vw";
            rootEl.style.height = "100vh";
        } else {
            rootEl.style.position = ""
            rootEl.style.top = "";
            rootEl.style.left = "";
            rootEl.style.width = "";
            rootEl.style.height = "";
        }
    }, [location.pathname])

    return (
        <>
            <Bg/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/3d' element={
                    <Canvas
                        shadows
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [0, 0, 2]
                        }}
                    >
                        <Experience />
                    </Canvas>
                }/>
            </Routes>
        </>
    )
}

root.render(
    <StrictMode>
        <BrowserRouter future={{ v7_startTransition: true }}>
            <App />
        </BrowserRouter>
    </StrictMode>
)
