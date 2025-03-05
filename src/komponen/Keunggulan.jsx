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
  },
  {
    title: "Ramah Revisi",
    description: "Terbuka untuk revisi kalau pekerjaan kami belum sesuai dengan brief."
  }
];

export default function Keunggulan() {

  const [expanded, setExpanded] = useState(Array(advantages.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  const bukaSemua = () => {
    setExpanded((prev) => prev.map(() => true));
  };
  

    

  return (
    <section id="keunggulan" className="py-16 rounded-3xl shadow-xl lg:-mt-64 font-monos">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="font-monos text-white text-sm"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          K E U N G G U L A N
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
          tap panah untuk membuka atau{" "}
          <span className="cursor-pointer underline relative z-10" onClick={bukaSemua}>
            buka semua
          </span>
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {advantages.map((adv, i)=>(
            <motion.div
                className="relative cursor-pointer bg-slate-200/10 backdrop-blur-sm p-6 shadow-lg overflow-hidden m-auto group"
                animate={{ maxWidth: expanded[i] ? "100%" : "90px", maxHeight: expanded[i] ? "100%" : "80px" }}
                onClick={() => toggleExpand(i)}
                transition={{ duration: 0.3, ease: "backOut" }}
                initial={{ opacity: 0, y: -30, scale:1 }}
                whileInView={{ opacity: 1, y: 0 }} 
                whileHover={{scale:1.1}}
                key={i} 
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={expanded[i] ? "check" : "arrow"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {expanded[i] ? (
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
                  animate={{ clipPath: expanded[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Sudut Kiri Atas */}
                <motion.div
                  className="absolute left-0 top-0 w-12 h-10 border-t-4 border-l-4 border-slate-200 pojok"
                  animate={{ clipPath: expanded[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Sudut Kanan Bawah */}
                <motion.div
                  className="absolute right-0 bottom-0 w-12 h-10 border-b-4 border-r-4 border-slate-200 pojok"
                  animate={{ clipPath: expanded[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Sudut Kiri Bawah */}
                <motion.div
                  className="absolute left-0 bottom-0 w-12 h-10 border-b-4 border-l-4 border-slate-200 pojok"
                  animate={{ clipPath: expanded[i] ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)" }}
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
