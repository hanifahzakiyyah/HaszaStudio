import {motion} from 'framer-motion'

export default function Bg(){

    const bgVariants = {
        start: { x: 500, y: 100 },
        mid: { x: -100, y: 300 }, 
        end: { x: 200, y: 250 }
      };

    return (
        <div className="relative w-full h-screen">
            <motion.div
                className="fixed top-0 left-0 w-full h-full -z-10"
                variants={bgVariants}
                initial="start"
                animate={["mid", "end"]}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 10, ease: "easeInOut" }}
            >
                <img
                    src="/bg.webp"
                    alt="Background"
                    className='scale-[500%] '
                />
            </motion.div>
        </div>
    )
}