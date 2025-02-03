import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './komponen/Navbar.jsx'
import Home from './komponen/Home.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {

    return (
        <>
            <Navbar/>
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
