import { motion, AnimatePresence } from "framer-motion";
import portof from "../data";
import { useEffect, useState } from "react";

export default function Popup({aidi, benarMuncul, onClose }){
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [typedText, setTypedText] = useState({ judul: "", tanggal: "", subJudul: "", deskripsi: "" });
    const speed = 18;
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClose() {
        if (typingTimeout) clearTimeout(typingTimeout);
        onClose();
    }

    useEffect(() => {
        if (benarMuncul && portof[aidi]) {
            if (typingTimeout) clearTimeout(typingTimeout);
    
            setTypedText({ judul: "", tanggal: "", subJudul: "", deskripsi: "" });
            typeEffect("judul", portof[aidi].judul, 0);
        }
    
        return () => {
            if (typingTimeout) clearTimeout(typingTimeout);
        };
    }, [benarMuncul, aidi]);
        

    function typeEffect(key, text, index) {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => ({ ...prev, [key]: prev[key] + text.charAt(index) }));
                typeEffect(key, text, index + 1);
            }, speed);
            
            setTypingTimeout(timeout);
        } else {
            setTimeout(() => {
                if (key === "judul") typeEffect("tanggal", portof[aidi].tanggal, 0);
                else if (key === "tanggal") typeEffect("subJudul", portof[aidi].subJudul, 0);
                else if (key === "subJudul") typeEffect("deskripsi", portof[aidi].deskripsi, 0);
            }, speed);
        }
    }

    if (!benarMuncul || !portof[aidi]) return null;

    const handleNext = () => {
        if (portof[aidi].files && currentIndex < portof[aidi].files.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -50 || velocity < -500) {
            handleNext();
        } else if (offset > 50 || velocity > 500) {
            handlePrev();
        }
    };

    return (<>
        <AnimatePresence>
            {benarMuncul && <motion.div 
                className="bg-slate-700/10 backdrop-blur-sm border border-slate-400 rounded-xl fixed z-[100] top-0 bottom-0 left-0 right-0 
                lg:top-24 lg:bottom-10 lg:left-10 lg:right-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center 
                gap-5 lg:gap-24 px-5 lg:px-20 pt-10 lg:pt-0"
                initial={{scale:0, y:300}}
                animate={{ scale: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 10 } }} 
                exit={{ scale: 0, y: -290, transition: { duration: 0.3, ease: "easeOut" } }} 
            > 
                <button
                    className="absolute top-4 right-4 lg:-top-4 lg:-right-4 scale-150 border border-slate-400 rounded-full bg-slate-700/80 shadow-md px-3 py-1"
                    onClick={handleClose}
                >
                    ✖
                </button>

                <div className="lg:basis-[40%] lg:max-w-[45%] flex overflow-hidden relative">
                    {(portof[aidi].files) ? (
                        <motion.div 
                            className="flex max-w-[45vh] lg:max-w-[75vh]"
                            animate={{ x: -currentIndex * 100 + "%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            drag="x"
                            dragConstraints={{ left: -((portof[aidi].files.length - 1) * 100), right: 0 }}
                            onDragEnd={handleDragEnd}
                        >
                            {portof[aidi].files.map((file, i) => (
                                <img key={i} 
                                    src={`/porto/${file}`} 
                                    alt={`Contoh design 3D HZS-studio | ${portof[aidi].judul} ${i + 1}`} 
                                    className="w-full h-auto max-h-[45vh] lg:max-h-[75vh] m-auto shadow-lg rounded-xl bg-slate-700/80 backdrop-blur-lg border border-slate-400"
                                    draggable="false"
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="max-w-[45vh] lg:max-w-[75vh] flex">
                            <motion.img
                                src={`/porto/${portof[aidi].file}`}
                                className="select-none w-full h-auto max-h-[45vh] lg:max-h-[75vh] m-auto shadow-lg rounded-xl"
                                whileHover={{scale:1.05, rotate: -3, transition: {type:"spring", stiffness: 300, damping:10}}}
                                whileTap={{scale:1.05, rotate: -3, transition: {type:"spring", stiffness: 300, damping:10}}}
                            />
                        </div>
                    )}
                    {(portof[aidi].files) ? (
                        <>
                            <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-600/50 p-2 rounded-full">◀</button>
                            <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-600/50 p-2 rounded-full">▶</button>
                        
                            <div className="absolute bottom-2 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {portof[aidi].files.map((_, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-500"}`}></div>
                                ))}
                            </div>
                        </>   
                    ) : "" }
                    
                </div>

                <div className="px-3 lg:px-10 font-monos bg-slate-700/80 backdrop-blur-lg border border-slate-400 rounded-xl flex flex-col 
                justify-center h-[45%] max-h-[42vh] lg:h-[75vh] lg:max-h-[65vh] w-full lg:basis-[60%] lg:max-w-[65%] flex-grow p-5">
                    <h2 className="text-2xl lg:text-4xl capitalize">{typedText.judul}</h2>
                    <p className="text-sm mb-3 lg:text-xl capitalize">{typedText.tanggal}</p>
                    <h3 className="text-sm lg:text-xl">{typedText.subJudul}</h3>
                    <p className="text-sm lg:text-xl">{typedText.deskripsi}</p>
                    <motion.a 
                        className={`${portof[aidi].button ? "visible" : "invisible" } px-5 py-3 border border-slate-400 rounded-full bg-slate-500/50 shadow-md mt-10 w-fit`}
                        href={portof[aidi].link}
                        target='__blank'
                    >
                        {portof[aidi].button}
                    </motion.a>
                </div>
            </motion.div>}
        </AnimatePresence>
    </>);
}  
