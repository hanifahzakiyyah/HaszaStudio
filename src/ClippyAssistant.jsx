import { useEffect, useRef, useState } from 'react';
import clippy from 'clippyjs';

function ClippyAssistant(scrollEnabled) {
  const [clippyAgent, setClippyAgent] = useState(null);
  const isLoaded = useRef(false);
  const clippyContainerRef = useRef();

  // Fungsi bantu untuk hitung scale
  const getScaleValue = () => (window.innerWidth >= 1024 ? 2 : 1);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    window.CLIPPY_CDN = "/clippy/agents/";

    clippy.load("Clippy", (agent) => {
      setClippyAgent(agent);
      agent.show();

      const clippyElement = agent._el.get(0);
      

      if (clippyContainerRef.current) {
        clippyContainerRef.current.appendChild(clippyElement);
      }

      const scaleValue = getScaleValue();
      const isDesktop = getScaleValue() === 2;

      agent._el.css({
        pointerEvents: "auto",
        transform: `scale(${scaleValue})`,
        cursor: "grab"
      });

      agent._el.on("mouseenter", () => {
        // agent.speak("tekan tombol 'Get Started' dan pilih halaman yang mau kamu tuju")
        agent.play(isDesktop? "GestureRight" : "GestureDown")
      })
    });

    // 🔥 Listener resize untuk update scale
    const handleResize = () => {
      if (clippyAgent) {
        const newScale = getScaleValue();
        clippyAgent._el.css({
          transform: `scale(${newScale})`
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [clippyAgent]);

  return (
    <div
      ref={clippyContainerRef}
      className={"fixed lg:absolute z-50 top-5 left-[50vw] -translate-x-1/4 lg:left-[35vw] lg:top-[50vh] w-[200px] h-[200px]"}
    >
      {/* Clippy akan muncul di dalam sini */}
    </div>
  );
}

export default ClippyAssistant;
