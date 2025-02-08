import { motion, AnimatePresence } from "framer-motion";
import portof from "../data";
import { useState, useEffect } from "react";
import Popup from "./Popup";

export default function Porto() {
    const [selectedFilter, setSelectedFilter] = useState("");
    const [displayedPorto, setDisplayedPorto] = useState(portof);
    const [isFiltering, setIsFiltering] = useState(false);
    const [muncul, setMuncul] = useState(false);
    const [id, setId] = useState()
    
    function munculkan (id) {
        setMuncul(true)
        setId(id)
    }

    const handleFilterChange = (category) => {
        const newFilter = category === "All" ? "" : category;

        if (newFilter !== selectedFilter) {
            setIsFiltering(true); // Mulai proses exit animasi
            setTimeout(() => {
                setSelectedFilter(newFilter);
                setDisplayedPorto(
                    newFilter ? portof.filter((p) => p.filter.includes(newFilter)) : portof
                );
                setIsFiltering(false); // Setelah delay selesai, data baru muncul
            }, 300);
        }
    };

    useEffect(() => {
        portof.forEach((p) => {
            const img = new Image();
            img.src = `/porto/${p.file}`;
        });
    }, []);

    return (
        <section className="container w-full mx-auto min-h-screen text-white font-monos flex flex-col">
            <div id="porto" className="-mt-16 lg:-mt-24 mb-24" />

            <motion.h1 
                className="text-md lg:text-xl lg:mb-5 mx-auto mt-5 lg:mt-0"
                style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)'}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                Portfolio
            </motion.h1>
            <motion.h1 
                className="lg:mb-5 mx-auto text-2xl lg:text-4xl -mt-0 lg:-mt-3"
                style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)'}}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                Check Our Latest Work
            </motion.h1>

            {/* Filter Buttons */}
            <div className="max-w-[90vw] lg:max-w-[60vw] mx-auto h-9 flex justify-center flex-wrap gap-2 lg:gap-1 mt-3 lg:mt-0 text-[0.8rem] lg:text-lg">
                {["All", "Website", "Furniture", "Icon", "App"].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleFilterChange(category)}
                        className={`bg-slate-400/10 backdrop-blur-sm border border-slate-400 px-3 py-1 rounded-full m-0 lg:m-3 transition-all duration-300 ${
                            (selectedFilter === category || (category === "All" && selectedFilter === "")) 
                            ? "bg-slate-600 text-white" 
                            : ""
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Portfolio Items */}
            <div className="w-full flex justify-center lg:justify-start gap-5 flex-wrap mt-8 transition-all duration-500">
                <AnimatePresence mode="sync">
                    {!isFiltering && displayedPorto.map((porto, i) => (
                        <motion.div
                            key={porto.judul}
                            className="group text-center border border-gray-400 p-0 rounded-sm overflow-hidden relative"
                            initial={{ opacity: 0.5, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <img
                                src={`/porto/${porto.file}`}
                                alt={porto.judul}
                                className="w-44 lg:w-[270px] h-44 lg:h-[270px] object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                            />
                            <div 
                                className="absolute z-20 bg-slate-800/70 top-0 left-0 right-0 bottom-0 py-7 px-3 flex flex-col justify-between opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none"
                            >
                                <h4 className="text-[1rem] lg:text-2xl line-clamp-1 pointer-events-auto">{porto.judul}</h4>
                                <p className="text-sm lg:text-lg hidden lg:inline-block line-clamp-2 pointer-events-auto">{porto.subJudul}</p>
                                <div className="mt-5 text-[0.8rem] lg:text-lg pointer-events-auto">
                                    <motion.button 
                                        className="bg-slate-400/30 backdrop-blur-sm border border-slate-400 px-3 w-2/3 py-1 rounded-full m-auto block mb-2"
                                        onClick={() => {
                                            const realIndex = portof.findIndex(p => p.judul === porto.judul);
                                            munculkan(realIndex);
                                        }}
                                        whileHover={{scale: 1.1, transition: { duration: 0.3, ease: "easeOut" }}}

                                    >Details</motion.button>
                                    <button className="bg-slate-400/30 backdrop-blur-sm border border-slate-400 px-3 w-2/3 py-1 rounded-full m-auto block">Zoom in</button>
                                </div>
                            </div>

                            
                            
                            
                        </motion.div>
                    ))}

                    <Popup aidi={id} benarMuncul={muncul} onClose={() => {
                            setMuncul(false);
                            // if (typingTimeout) clearTimeout(typingTimeout);
                        }}
                    />
                </AnimatePresence>
            </div>
        </section>
    );
}
