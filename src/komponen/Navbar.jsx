import { useState } from "react";
import { motion } from "framer-motion";
import '../style.css'

export default function Navbar() {
    const navigation = [
        { name: "Dashboard", href: "#" },
        { name: "Team", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Calendar", href: "#" },
      ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
        className="border-b border-slate-400 shadow-lg shadow-slate-500/50 text-shadow bg-slate-700/60 backdrop-blur-sm font-monos w-[100%] rounded-b-2xl fixed z-40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: -100, opacity: 0 }} 
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} // 🔥 
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <motion.h1 
              className="text-2xl bg-gradient-to-t from-cyan-600 to-cyan-300 bg-clip-text inline-block text-transparent select-none" 
              style={{ filter: 'drop-shadow(0px 0px 8px #ffffffdd)'}}
              whileHover={{ scale: 1.1, filter: 'drop-shadow(2px 2px 10px #aaaaff)' }}
              whileTap={{ scale: 1.1, filter: 'drop-shadow(2px 2px 10px #aaaaff)' }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              HZS Studio
            </motion.h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-cyan-300 px-3 py-2 rounded-md text-sm font-medium"
                  style={{ filter: 'drop-shadow(0px 0px 8px #ffffffdd)', }}
                  whileHover={{ scale: 1.1, filter: 'drop-shadow(2px 2px 10px #aaaaff)' }}
                  whileTap={{ scale: 1.1, filter: 'drop-shadow(2px 2px 10px #aaaaff)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            className="sm:hidden text-cyan-300 hover:text-shadow focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ filter: 'drop-shadow(0px 0px 8px #ffffffdd)'}}>
              {/* Garis atas */}
              <motion.line
                x1="4" y1="6" x2="20" y2="6"
                strokeWidth="2" strokeLinecap="round"
                animate={{y2: isOpen ? 18 : 6}}
                transition={{ duration: 0.3 }}
              />
              {/* Garis tengah */}
              <motion.line
                x1="4" y1="12" x2="20" y2="12"
                strokeWidth="2" strokeLinecap="round"
                animate={{ scaleX: isOpen ? 0 : 1}}
                transition={{ duration: 0.2 }}
              />
              {/* Garis bawah */}
              <motion.line
                x1="4" y1="18" x2="20" y2="18"
                strokeWidth="2" strokeLinecap="round"
                animate={{y2: isOpen ? 6 : 18}}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dengan animasi */}
      <div className="relative w-full">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            exit={{opacity:0, y: -100}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`sm:hidden w-full px-2 pb-3 pt-2 space-y-1 ${isOpen ? "block" : "hidden"}`}
        >
            {navigation.map((item) => (
            <motion.a
                key={item.name}
                href={item.href}
                className="block text-cyan-300 px-3 py-2 rounded-md text-base font-medium"
                style={{ filter: 'drop-shadow(0px 0px 8px #ffffffdd)'}}
                whileHover={{ scale: 1.1, filter: 'drop-shadow(2px 2px 10px #aaaaff)' }}
                whileTap={{ scale: 1.1, filter: 'drop-shadow(2px 2px 10px #aaaaff)' }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                {item.name}
            </motion.a>
            ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
