import { useState } from "react";
import { motion } from "framer-motion";

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
        className="border-b border-slate-500 bayangan text-shadow bg-slate-700/60 backdrop-blur-sm font-monos w-[100%] rounded-b-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: -100, opacity: 0 }} 
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }} // 🔥 
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl bg-gradient-to-t from-gray-400 to-gray-300 bg-clip-text inline-block text-transparent text-shadow">
              HZS Studio
            </h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            className="sm:hidden text-gray-300 hover:text-shadow focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.7)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.7)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
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
            <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
                {item.name}
            </a>
            ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
