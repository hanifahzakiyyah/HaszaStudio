import { useState } from "react";
import Bg from "./Bg";
import Navbar from "./Navbar"
import { motion } from "framer-motion";

const videos = [
  { title: "Abstract Design", year: "2025", thumbnail: "./porto/elektro.webp", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Robot", year: "2022", thumbnail: "./porto/jasats.webp", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "Futuristic Interface", year: "2025", thumbnail: "./porto/dirgahayu.webp", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "3D Character", year: "2021", thumbnail: "./porto/camping.webp", video: "https://www.w3schools.com/html/movie.mp4" },
  { title: "City Skyline", year: "2025", thumbnail: "./porto/gameDash.webp", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { title: "Geometric Animation", year: "2023", thumbnail: "./porto/kosmetik.webp", video: "https://www.w3schools.com/html/movie.mp4" },
];

export default function Animations({bahasa}) {
  const [selected, setSelected] = useState(null);

  return(
    <>
        <Navbar />
        <Bg/>
        <div className="pt-20">
            <div className="text-white lg:m-10 m-3 lg:p-10 p-5 lg:border-4 border-2 border-slate-300 rounded-2xl font-monos backdrop-blur-sm">
                <motion.h1
                    className="text-2xl lg:text-3xl lg:mb-5 text-center mb-3"
                    style={{ filter: 'drop-shadow(0px 0px 15px #ffffff88)' }}
                    whileHover={{ scaleY: 1.3, originX: 0 }}
                    whileTap={{ scaleY: 1.3, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                    My Motions and 3D Animations
                </motion.h1>

                <p className="text-center mb-10 text-gray-400 lg:-mt-3">CLICK TO WATCH VIDEO</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {videos.map((vid, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer h-80 overflow-hidden"
                            onClick={() => setSelected(vid)}
                        >
                        
                        <motion.img
                            src={vid.thumbnail}
                            alt={vid.title}
                            className="w-full m-auto h-60 object-cover rounded-lg shadow-md"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />

                        <div className="mt-2">
                            <h2 className="text-lg font-semibold">{vid.title}</h2>
                            <p className="text-gray-400 text-sm">{vid.year}</p>
                        </div>
                        </div>
                    ))}
                </div>


                
            </div>
        </div>

        {selected && (
            <div className="bg-slate-700/10 backdrop-blur-sm fixed z-40 top-0 bottom-0 left-0 right-0 lg:bottom- flex flex-col lg:flex-row justify-center items-center gap-5 lg:px-20 pt-10 lg:pt-0">
                <div className=" rounded-lg h-[80%] w-[80%] relative">
                    
                    <button
                        className="absolute top-0 right-0 lg:-top-4 lg:-right-4 scale-120 border border-slate-400 rounded-full bg-slate-700/80 shadow-md px-3 py-1 z-50"
                        onClick={() => setSelected(null)}
                    >
                        ✖
                    </button>
                    <video controls autoPlay className="w-full rounded-lg">
                        <source src={selected.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="text-gray-200 mt-4 text-xl font-semibold">{selected.title}</h2>
                    <p className="text-gray-400">{selected.year}</p>
                </div>
            </div>
        )}
    </>
  );
}
