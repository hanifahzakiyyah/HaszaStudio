import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Bg() {
    useEffect(() => {
        document.body.style.backgroundImage = `url("/bg.webp")`;
        document.body.style.animation = "bg-scrolling 5s linear infinite";
        return () => {
            document.body.style.backgroundImage = "";
            document.body.style.animation = "";
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900 absolute -z-50">

            {/* Tailwind Inline Animation */}
            <style>
                {`
                @keyframes bg-scrolling {
                    100% { background-position: 50px 50px; }
                }
                `}
            </style>
        </div>
    );
}
















// import {motion} from 'framer-motion'

// export default function Bg(){

//     const bgVariants = {
//         start: { x: 500, y: 100 },
//         mid: { x: -100, y: 300 }, 
//         end: { x: 200, y: 250 }
//       };

//     return (
//         <div className="absolute w-full h-screen">
//             <motion.div
//                 className="fixed top-0 left-0 w-full h-full -z-10"
//                 variants={bgVariants}
//                 initial="start"
//                 animate={["mid", "end"]}
//                 transition={{ repeat: Infinity, repeatType: "reverse", duration: 10, ease: "easeInOut" }}
//             >
//                 <img
//                     src="/bg.webp"
//                     alt="Background"
//                     className='scale-[500%] blur-xs md:blur-s lg:blur-sm'
//                 />
//             </motion.div>
//         </div>
//     )
// }