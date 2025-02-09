import { motion, AnimatePresence, spring } from "framer-motion";
import portof from "../data";
import { useEffect, useState } from "react";

export default function Popup({aidi, benarMuncul, onClose }){
    const [typingTimeout, setTypingTimeout] = useState(null);
    const [typedText, setTypedText] = useState({ judul: "", tanggal: "", subJudul: "", deskripsi: "" });
    const speed = 18; // Percepat proses mengetik dengan mengurangi nilai speed

    function handleClose() {
        if (typingTimeout) clearTimeout(typingTimeout); // Bersihkan timeout saat popup ditutup
        onClose(); // Panggil onClose dari parent
    }

    useEffect(() => {
        if (benarMuncul && portof[aidi]) {
            if (typingTimeout) clearTimeout(typingTimeout); // Hentikan efek mengetik sebelumnya
    
            setTypedText({ judul: "", tanggal: "", subJudul: "", deskripsi: "" });
            typeEffect("judul", portof[aidi].judul, 0);
        }
    
        return () => {
            if (typingTimeout) clearTimeout(typingTimeout); // Hapus timeout saat komponen di-unmount
        };
    }, [benarMuncul, aidi]);
        

    function typeEffect(key, text, index) {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => ({ ...prev, [key]: prev[key] + text.charAt(index) }));
                typeEffect(key, text, index + 1);
            }, speed);
            
            setTypingTimeout(timeout); // Simpan timeout ke state            
        } else {
            setTimeout(() => {
                if (key === "judul") typeEffect("tanggal", portof[aidi].tanggal, 0);
                else if (key === "tanggal") typeEffect("subJudul", portof[aidi].subJudul, 0);
                else if (key === "subJudul") typeEffect("deskripsi", portof[aidi].deskripsi, 0);
            }, speed); // Tambahkan sedikit jeda sebelum lanjut ke elemen berikutnya
        }
    }

    if (!benarMuncul || !portof[aidi]) return null;

    return (<>
        <AnimatePresence>
            {benarMuncul && <motion.div 
                className=" bg-slate-700/10 backdrop-blur-sm border border-slate-400 rounded-xl fixed z-[100] top-0 bottom-0 left-0 right-0 lg:top-24 lg:bottom-10 lg:left-10 lg:right-10 overflowy-scroll flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 lg:gap-10 px-5 lg:px-10 pt-10 lg:pt-0"
                initial={{scale:0, y:300}}
                animate={{ scale: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 10 } }} 
                exit={{ scale: 0, y: -290, transition: { duration: 0.3, ease: "easeOut" } }} 
            > 
                <motion.button
                    className="absolute top-4 right-4 lg:-top-4 lg:-right-4 scale-150 border border-slate-400 rounded-full bg-slate-700/80 shadow-md px-3 py-1"
                    onClick={handleClose}
                >
                    ✖
                </motion.button>

                <div className="lg:h-[100%] lg:w-[50%] flex">
                    <motion.img
                        src={`/porto/${portof[aidi].file}`}
                        className="select-none w-full h-auto max-h-[45vh] lg:max-h-[75vh] m-auto shadow-lg rounded-xl"
                        whileHover={{scale:1.05, rotate: -3, transition: {type:"spring", stiffness: 300, damping:10}}}
                        whileTap={{scale:1.05, rotate: -3, transition: {type:"spring", stiffness: 300, damping:10}}}
                    />
                </div>

                <div className="px-3 lg:px-10 font-monos bg-slate-700/80 backdrop-blur-lg border border-slate-400 rounded-xl flex flex-col justify-center h-[45%] max-h-[42vh] lg:h-[75vh] lg:max-h-[75vh] w-[100%] lg:w-[50%] p-5">
                    <h2 className="text-2xl lg:text-4xl capitalize">{typedText.judul}</h2>
                    <p className="text-sm mb-3 lg:text-xl capitalize">{typedText.tanggal}</p>
                    <h3 className="text-sm lg:text-xl">{typedText.subJudul}</h3>
                    <p className="text-sm lg:text-xl">{typedText.deskripsi}</p>
                    <motion.a 
                        className={`${portof[aidi].button ? "visible" : "invisible" } px-5 py-3 border border-slate-400 rounded-full bg-slate-500/50 shadow-md mt-10 w-fit`}
                        href={portof[aidi].link}
                    >
                        {portof[aidi].button}
                    </motion.a>
                </div>

            </motion.div>}
        </AnimatePresence>
    </>)
}