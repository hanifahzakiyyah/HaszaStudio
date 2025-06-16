import { useState } from "react";
import Bg from "./Bg";
import Navbar from "./Navbar"
import { motion } from "framer-motion";

const videos = [
  { title: "Excavator", year: "2022", thumbnail: "./video/eska.webp", video: "./video/eska.mp4" },
  { title: "Falling Bird Story", year: "2025", thumbnail: "./video/burung.webp", video: "./video/burung.mp4" },
  { title: "Astronout and the Moon", year: "2023", thumbnail: "./video/bulan.webp", video: "./video/bulan.mp4" },
  { title: "Robot Arm", year: "2024", thumbnail: "./video/robot.webp", video: "./video/robot.mp4" },
  { title: "Bitcoins Logo", year: "2025", thumbnail: "./video/logo.webp", video: "./video/logo.mp4" },
  { title: "Stylized Growing Flower", year: "2024", thumbnail: "./video/bungaa.webp", video: "./video/bunga.mp4" },
  { title: "Cloth Simulaltion", year: "2024", thumbnail: "./video/gelembung.webp", video: "./video/gelembung.mp4" },
  { title: "Eid Congrats Video", year: "2023", thumbnail: "./video/idul-fitri.webp", video: "./video/idul-fitri.mp4" },
  { title: "Cubes Motion", year: "2023", thumbnail: "./video/kotakgelombang.webp", video: "./video/kotakgelombang.mp4" },
  { title: "Brick Motion", year: "2025", thumbnail: "./video/kotakkeatass.webp", video: "./video/kotakkeatas.mp4" },
  { title: "Just For Fun", year: "2023", thumbnail: "./video/ngerubungg.webp", video: "./video/ngerubung.mp4" },
];

export default function Animations({bahasa}) {
  const [selected, setSelected] = useState(null);

  return(
    <>
        <Navbar />
        <Bg/>
        <div className="pt-20">
            <div className="text-white lg:m-10 m-3 lg:p-10 p-5 lg:border-4 border-2 border-slate-300 rounded-2xl font-monos backdrop-blur-sm pointer-events-none">
                <motion.h1
                    className="text-2xl lg:text-3xl lg:mb-5 text-center mb-3 pointer-events-auto"
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
                            className="relative group cursor-pointer h-80 overflow-hidden pointer-events-auto"
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
            <div className="bg-slate-700/10 backdrop-blur-sm fixed z-40 top-0 bottom-0 left-0 right-0 lg:bottom- flex flex-col lg:flex-row justify-center items-center gap-5 lg:px-20 pt-10 lg:pt-0 pointer-events-auto">
                <div className=" rounded-lg h-[80%] w-[80%] relative">
                    
                    <button
                        className="absolute top-0 right-0 lg:-top-4 lg:-right-4 scale-120 border border-slate-400 rounded-full bg-slate-700/80 shadow-md px-3 py-1 z-50"
                        onClick={() => setSelected(null)}
                    >
                        ✖
                    </button>
                    <video controls controlsList="nodownload" autoPlay className="w-full rounded-lg">
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
