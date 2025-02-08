import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero({ setScrollEnabled }){

    const enableScrollAndScrollToSection = () => {
        setScrollEnabled(true);
        setTimeout(() => {
          document.getElementById("porto")?.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay kecil agar efek scroll lebih natural
    };

    return (
        <section className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center h-screen overflow-hidden lg:pt-16">
            
            
            <div 
                className="w-full lg:w-1/2 text-gray-300 my-[20%] text-center lg:text-left py-[15vh] lg:py-[8vh] font-monos "
            >
                <motion.h1 
                    className="text-2xl lg:mb-5" 
                    style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)'}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{}}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >Welcome to</motion.h1>
                <motion.p
                     className="text-5xl lg:mb-5" style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)'}}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     initial={{}}
                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >HZS Studio</motion.p>
                <motion.button
                    className="relative z-10 py-3 px-5 m-5 backdrop-blur-sm
                                 before:content-[''] before:absolute before:inset-0 before:border before:border-sky-300
                                 before:bg-sky-300/20 before:-z-10 before:[transform:skewX(-30deg)] 
                                before:transition-all before:duration-300 before:ease-out "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{}}
                    animate={{}}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onClick={enableScrollAndScrollToSection}
                >
                    <span className="relative z-10">Go to Portfolio</span>
                </motion.button>


            </div>


            <div className="w-full lg:w-[75vw] h-[90vh] bg-center bg-cover lg:bg-auto backdrop-blur-sm"
                style={{
                backgroundImage: "url('../hero.webp')",
                maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 63%)",
                WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 63%)"
                }}>
            </div>


            
        </section>
    )
}
