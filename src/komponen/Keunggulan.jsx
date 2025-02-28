import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, LucideCircleArrowDown } from "lucide-react";
import { useState } from "react";

const advantages = [
  {
    title: "Berkualitas",
    description: "Setiap detail model dan animasi dikerjakan dengan presisi tinggi untuk hasil yang memukau."
  },
  {
    title: "Pelayanan Responsif",
    description: "Kami siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik dengan komunikasi yang cepat."
  },
  {
    title: "Proses Efisien",
    description: "Dengan workflow yang terorganisir, proyek Anda selesai tepat waktu tanpa mengorbankan kualitas."
  },
  {
    title: "Kustom Sesuai Kebutuhan",
    description: "Layanan kami fleksibel dan dapat disesuaikan dengan kebutuhan spesifik proyek Anda."
  },
  {
    title: "Teknologi Terkini",
    description: "Kami menggunakan software dan teknik terbaru untuk memastikan hasil yang modern dan kompetitif."
  }
];

export default function Keunggulan() {

    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);

    const exArr = [isExpanded1, isExpanded2, isExpanded3, isExpanded4, isExpanded5]
    const exSet = [setIsExpanded1, setIsExpanded2, setIsExpanded3, setIsExpanded4, setIsExpanded5]
    

  return (
    <section id="keunggulan" className="py-16 rounded-3xl shadow-xl lg:-mt-64">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="font-monos text-white text-sm"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          K E U N T U N G A N
        </motion.p>
        <motion.h2
          className="text-white text-2xl lg:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mengapa Memilih HZS Studio?
        </motion.h2>
        <motion.p
          className="font-monos text-white text-sm -mt-5 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          (tap panah untuk membuka)
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {advantages.map((adv, i)=>(
            <motion.div
                className="relative bg-slate-200/10 backdrop-blur-sm p-6 shadow-lg overflow-hidden m-auto group"
                animate={{ maxWidth: exArr[i] ? "100%" : "90px", maxHeight: exArr[i] ? "100%" : "80px" }}
                onClick={() => exSet[i] (!exArr[i])}
                transition={{ duration: 0.3, ease: "backOut" }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}  
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={exArr[i] ? "check" : "arrow"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {exArr[i] ? (
                    <CheckCircle className="text-slate-200 w-10 h-10 mb-4 m-auto" strokeWidth={2} />
                  ) : (
                    <LucideCircleArrowDown className="text-slate-200 w-10 h-10 mb-4 m-auto" strokeWidth={2} />
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="pl-6">
                <h3 className="text-white text-lg text-left font-semibold mb-2">
                    {advantages[i].title}
                </h3>
                <p className="text-gray-400 text-sm text-left">
                    {advantages[i].description}
                </p>

                {/* Sudut Kanan Atas */}
                <motion.div
                  className="absolute right-0 top-0 w-12 h-10 border-t-4 border-r-4 border-slate-200 pojok"
                  animate={{ clipPath: exArr[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Sudut Kiri Atas */}
                <motion.div
                  className="absolute left-0 top-0 w-12 h-10 border-t-4 border-l-4 border-slate-200 pojok"
                  animate={{ clipPath: exArr[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Sudut Kanan Bawah */}
                <motion.div
                  className="absolute right-0 bottom-0 w-12 h-10 border-b-4 border-r-4 border-slate-200 pojok"
                  animate={{ clipPath: exArr[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Sudut Kiri Bawah */}
                <motion.div
                  className="absolute left-0 bottom-0 w-12 h-10 border-b-4 border-l-4 border-slate-200 pojok"
                  animate={{ clipPath: exArr[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

              </div>
            </motion.div>
          ))}
          
          






        

        </div>
      </div>
    </section>
  );
}
