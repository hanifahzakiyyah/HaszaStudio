import { useEffect, useState, lazy } from 'react';
import Hero from './Hero.jsx'
import Porto from './Porto.jsx'
import Navbar from './Navbar';
import Layanan from './Layanan.jsx';
import Keunggulan from './Keunggulan.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';

const Bg = lazy(() => import('./Bg.jsx'));


export default function Home(){

    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
      document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
    }, [scrollEnabled]);


    return (<>
        {scrollEnabled && <Navbar />}
        <Bg />
        <Hero setScrollEnabled={setScrollEnabled}/>
        <Porto />
        <Layanan/>
        <Keunggulan/>
        <About/>
        <Footer/>
    </>
    )
}