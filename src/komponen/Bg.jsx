import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Bg() {
    const [showTooltip, setShowTooltip] = useState(null);

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="w-screen h-screen absolute bg-slate-900">
            {/* Background pakai gambar bg.webp */}
            <div className="fixed w-[100vh] h-[100vh] z-[0] lg:h-[100vw] lg:w-[100vw]">
                <img 
                    src="bg.webp" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Tombol Scroll ke Atas */}
            <button 
                onClick={scrollToTop}
                onMouseEnter={() => setShowTooltip("scroll")}
                onMouseLeave={() => setShowTooltip(null)}
                aria-label="Scroll to top"
                className="fixed z-10 bottom-4 right-4 bg-slate-700/10 backdrop-blur-sm border border-white text-white lg:p-3 p-1 rounded shadow-lg hover:bg-gray-700 transition"
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <ArrowUp size={24} />
                    {showTooltip === "scroll" && (
                        <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded transition">
                            Kembali ke atas
                        </span>
                    )}
                </div>
            </button>
        </div>
    );
}
