import { useEffect, useRef, useState } from 'react';
import clippy from 'clippyjs';

function ClippyAssistant() {
    const [clippyAgent, setClippyAgent] = useState(null);
    const isLoaded = useRef(false); // Mencegah double render

    useEffect(() => {
        if (isLoaded.current) return; // Jika sudah dimuat, jangan jalankan lagi
        isLoaded.current = true;

        window.CLIPPY_CDN = "/clippy/agents/";

        clippy.load("Bonzi", (agent) => {
            setClippyAgent(agent);
            agent.show();

            // Set posisi awal & perbesar Clippy
            agent._el.css({
                position: "absolute",
                left: "50px",  // Posisi awal
                top: "50px",
                zIndex: "9999",
                pointerEvents: "none",
                transform: "scale(1.5)", // 🔥 Perbesar 1.5x
                transformOrigin: "bottom right" // 🔥 Pastikan skala dari sudut kanan bawah
            });

            // Event: Saat Clippy di-hover
            agent._el.on("mouseenter", () => {
                agent.play("Hide"); 
            });

            // Event: Saat Clippy di-klik
            agent._el.on("click", () => {
                agent.play("LookDownReturn"); // Animasi menunjuk
            });
        });

        return () => {
            if (clippyAgent) {
                clippyAgent.hide();
            }
        };
    }, []);

    return null; // Tidak perlu return elemen karena Clippy muncul sendiri
}

export default ClippyAssistant;
