import { useEffect, useState, lazy } from 'react';
import Hero from './Hero.jsx'
import Porto from './Porto.jsx'
import Navbar from './Navbar';
import Layanan from './Layanan.jsx';
import Keunggulan from './Keunggulan.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import BukuTamu from './BukuTamu.jsx';

// import ClippyAssistant from '../ClippyAssistant.jsx';


const Bg = lazy(() => import('./Bg.jsx'));


export default function Home(){

    const [scrollEnabled, setScrollEnabled] = useState(false);
    const [bahasa, setBahasa] = useState("ind");

    const handleBahasaChange = (newBahasa) => {
      setBahasa(newBahasa);
    };

    useEffect(() => {
      document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
    }, [scrollEnabled]);


    return (<>
        {scrollEnabled && <Navbar />}
        <Bg />
        <Hero setScrollEnabled={setScrollEnabled} onBahasaChange={handleBahasaChange}/>
        <Porto bahasa={bahasa}/>
        <Layanan bahasa={bahasa}/>
        <Keunggulan bahasa={bahasa}/>
        <About bahasa={bahasa}/>
        <BukuTamu bahasa={bahasa}/>
        <Footer bahasa={bahasa}/>
        {/* <ClippyAssistant scrollEnabled={scrollEnabled}/> */}
    </>
    )
}