import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRive } from "rive-react";


export default function Hero({ setScrollEnabled, onBahasaChange }){
    const [bahasa, setBahasa] = useState("ind");

    const {rive: riveBahasa, RiveComponent:RiveBahasa} = useRive({
        src: "bahasa.riv",
        stateMachines: "State Machine 1",
        artboard: "Artboard",
        autoplay: true,
    })
    const {rive: riveNgetik, RiveComponent:RiveNgetik} = useRive({
        src: "ngetik.riv",
        stateMachines: "SM",
        artboard: "53",
        autoplay: true,
    })

   useEffect(() => {
        if (!riveBahasa) return;

        const handleStateChange = (event) => {
            const stateName = event.data;

            if (stateName.includes("indToEng")) {
                handleClick("eng");
            }
            if (stateName.includes("engToInd")) {
                handleClick("ind");
            }
        };

        riveBahasa.on('statechange', handleStateChange);

        return () => {
            riveBahasa.off('statechange', handleStateChange);
        };
    }, [riveBahasa]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const bahasaFromUrl = params.get("lang");
        if (bahasaFromUrl && (bahasaFromUrl === "ind" || bahasaFromUrl === "eng")) {
            setBahasa(bahasaFromUrl);
            if (onBahasaChange) onBahasaChange(bahasaFromUrl);
        }
    }, []);

    const enableScrollAndScrollToSection = (sec) => {
        setScrollEnabled(true);
        setTimeout(() => {
          document.getElementById(sec)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleClick = (pilihan) => {
        setBahasa(pilihan);
        if (onBahasaChange) onBahasaChange(pilihan);
    };

    // test

    return (
        <section id="hero" className="container relative w-scree h-screen overflow-hidden flex items-center justify-center flex-col lg:flex-row pointer-events-none">
            
            
            <div className="w-full h-1/2 lg:w-1/2 lg:h-full mt-24 -mb-32 lg:-mb-16 lg:mt-6 text-gray-300 text-center font-monos flex items-center justify-center "
            >
                <div>
                    
                    <motion.h1
                        className="text-md lg:text-3xl lg:mb-5 pointer-events-auto"
                        style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)' }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        {bahasa === "ind" ? (
                            <>
                                Buat Website yang Interaktif<br />
                                dan Keperluan 3D<br />
                                bersama<br />
                            </>
                        ) : (
                            <>
                                Build Interactive Website<br />
                                and 3D needs<br />
                                with<br />
                            </>
                        )}
                        <motion.span
                            className="text-2xl lg:text-6xl block lg:my-5 my-0 lg:mb-7 mb-0"
                            whileHover={{ scale: 1.1, originX: 0.5 }}
                            whileTap={{ scale: 1.1, originX: 0.5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            Hasza Studio
                        </motion.span>
                    </motion.h1>
                    
                    <motion.button
                        className="z-10 py-3 px-5 my-1 mb-8 backdrop-blur-sm rounded-sm border-l-8 border-r border-t border-b border-slate-400 shadow-2xl text-sm lg:text-xl pointer-events-auto"
                        whileHover={{ scaleX: 1.1, originX:0.5}}
                        whileTap={{ scaleX: 1.1, originX:0.5 }}
                        // transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        onClick={()=>enableScrollAndScrollToSection("porto")}
                    >
                        <span className="z-10">
                            {bahasa === "ind" ? ( <>Masuk dan lihat</>) : ( <>Get Started!</>)}
                        </span>
                    </motion.button>

                    <hr className="invisible lg:visible"/>

                    <div className="w-[400px] h-[200px] scale-90 lg:w-[800px] lg:h-[400px] -mt-8 pointer-events-auto">
                        <RiveBahasa />
                    </div>
            
                </div>

            </div>

            <div className=" w-full h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center mt-32 lg:mt-32 lg:justify-start ml-0" >
                <div className="w-[400px] h-[250px] lg:w-[850px] lg:h-[800px] pointer-events-auto">
                    <RiveNgetik />
                </div>
            </div>


            
        </section>
    )
}
