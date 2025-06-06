import { useEffect, useState } from "react";
import { PauseCircle, PlayCircle, ArrowUp } from "lucide-react";

export default function Bg() {
    const [isAnimating, setIsAnimating] = useState(true);
    const [showTooltip, setShowTooltip] = useState(null); // null = tidak ada tooltip

    useEffect(() => {
        document.body.style.backgroundImage = `url("/bg.webp")`;

        if (isAnimating) {
            document.body.style.animation = "bg-scrolling 5s linear infinite";
        } else {
            document.body.style.animation = "none";
        }

        return () => {
            document.body.style.animation = "";
        };
    }, [isAnimating]);

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900 absolute">
            {/* Tailwind Inline Animation */}
            <style>
                {`
                @keyframes bg-scrolling {
                    100% { background-position: 50px 50px; }
                }
                `}
            </style>

            {/* Tombol Stop/Mulai Animasi */}
            <button 
                onClick={() => setIsAnimating(!isAnimating)}
                onMouseEnter={() => setShowTooltip("animasi")}
                onMouseLeave={() => setShowTooltip(null)}
                aria-label="Toggle Background Animation"
                className="fixed z-10 bottom-24 right-4 bg-slate-700/10 backdrop-blur-sm border border-white text-white p-3 rounded shadow-lg hover:bg-gray-700 transition"
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    {isAnimating ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                    {showTooltip === "animasi" && (
                        <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded transition">
                            {isAnimating ? "Stop animasi background" : "Mulai animasi background"}
                        </span>
                    )}
                </div>
            </button>

            {/* Tombol Scroll ke Atas */}
            <button 
                onClick={scrollToTop}
                onMouseEnter={() => setShowTooltip("scroll")}
                onMouseLeave={() => setShowTooltip(null)}
                aria-label="Scroll to top"
                className="fixed z-10 bottom-4 right-4 bg-slate-700/10 backdrop-blur-sm border border-white text-white p-3 rounded shadow-lg hover:bg-gray-700 transition"
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
