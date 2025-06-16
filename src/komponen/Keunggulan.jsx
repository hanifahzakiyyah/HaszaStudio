import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, LucideCircleArrowDown } from "lucide-react";
import { useState } from "react";

const advantages = [
  {
    titleInd: "Berkualitas",
    titleEng: 'High Quality',
    descriptionInd: "Setiap detail model dan animasi dikerjakan dengan presisi tinggi untuk hasil yang memukau.",
    descriptionEng: "Every detail of the model and animation is crafted with high precision for stunning results."
  },
  {
    titleInd: "Pelayanan Responsif",
    titleEng: 'Rensponsive Service',
    descriptionInd: "Kami siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik dengan komunikasi yang cepat.",
    descriptionEng: "We are ready to listen to your needs and provide the best solutions with fast communication."
  },
  {
    titleInd: "Ramah SEO",
    titleEng: 'SEO Friendly',
    descriptionInd: "Untuk kebutuhan Website, struktur HTML, gambar, link dan lain-lainnya sudah mendukung SEO.",
    descriptionEng: "For website needs, the HTML structure, images, links, and other elements are all SEO-friendly."
  },
  {
    titleInd: "Kustom Sesuai Kebutuhan",
    titleEng: 'Customized to Your Needs',
    descriptionInd: "Layanan kami fleksibel dan dapat disesuaikan dengan kebutuhan spesifik proyek Anda.",
    descriptionEng: "Our services are flexible and can be tailored to the specific needs of your project."
  },
  {
    titleInd: "Teknologi Terkini",
    titleEng: 'Newest Technology',
    descriptionInd: "Kami menggunakan software dan teknik terbaru untuk memastikan hasil yang modern dan kompetitif.",
    descriptionEng: "We use the latest software and techniques to ensure modern and competitive results."
  },
  {
    titleInd: "Ramah Revisi",
    titleEng: 'Revision Friendly',
    descriptionInd: "Terbuka untuk revisi kalau pekerjaan kami belum sesuai dengan brief.",
    descriptionEng: "Open to revisions if our work does not yet align with the brief."
  }
];

export default function Keunggulan({bahasa}) {

  const [expanded, setExpanded] = useState(Array(advantages.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  const bukaSemua = () => {
    setExpanded((prev) => prev.map(() => true));
  };
  

    

  return (
    <section id="keunggulan" className="py-16 rounded-3xl shadow-xl lg:-mt-64 font-monos pointer-events-none">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 pointer-events-auto">
        <motion.p
          className="font-monos text-white text-sm"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bahasa=='ind'? 'K E U N G G U L A N' : 'A D V A N T A G E S'}
        </motion.p>
        <motion.h2
          className="text-white text-2xl lg:text-4xl font-bold mb-6 pointer-events-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bahasa=='ind' ? 'Mengapa Memilih HZS Studio?' : 'Why HZS Studio?'}
        </motion.h2>
        <motion.p
          className="font-monos text-white text-sm -mt-5 mb-10 pointer-events-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {bahasa=='ind' ? 'tap panah untuk membuka atau ' : 'tap the arrow to open or '}
          <motion.span className="cursor-pointer underline relative z-20" 
            onClick={bukaSemua}
            initial={{scale:1, rotate:0}}
            whileHover={{scale:1.5, rotate:30}}
          >
            {bahasa=='ind' ? 'buka semua' : 'open all'}
          </motion.span>
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {advantages.map((adv, i)=>(
            <motion.div
                className="relative cursor-pointer bg-slate-200/10 backdrop-blur-sm p-6 shadow-lg overflow-hidden m-auto group pointer-events-auto"
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
                    {bahasa=='ind' ? advantages[i].titleInd : advantages[i]. titleEng}
                </h3>
                <p className="text-gray-400 text-sm text-left">
                    {bahasa=='ind' ? advantages[i].descriptionInd : advantages[i]. descriptionEng}
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
