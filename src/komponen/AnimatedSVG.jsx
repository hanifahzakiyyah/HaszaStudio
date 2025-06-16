import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedSVG = () => {

  const pathVariants = {
    initial: { 
      d: "M26.671033 281.05286 L38.963621 293.34545", 
      opacity: 1 
    },
    animate: { 
      d: "M25.79484 290.74085 L29.657476 294.60348", 
      opacity: 0.2 
    }
  };
  

  return (
    <div className="w-[100vw] h-[100vh] lg:w-[115vh] lg:h-[97vw] m-auto lg:-mt-96 lg:rotate-90 pl-0 lg:pl-52 select-none">
      <svg
        viewBox="0 0 210 297"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none pointer-events-auto"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <filter
            id="filter19"
            x="-0.076783368"
            y="-1.8660143"
            width="1.1535667"
            height="4.7320285">
              <feGaussianBlur stdDeviation="3"/>
          </filter>
          <filter
            id="filter21"
            x="-0.076783368"
            y="-1.8660143"
            width="1.1535667"
            height="4.7320285">
              <feGaussianBlur stdDeviation="3"/>
          </filter>
          <filter
            id="filter23"
            x="-0.076783368"
            y="-1.8660143"
            width="1.1535667"
            height="4.7320285">
              <feGaussianBlur stdDeviation="3"/>
          </filter>

        </defs>
        
        <g>
          <path fill="#d9d9c9" fillOpacity={1} stroke="none" d="m 25.65,105.39 0.18,27.99 3.779999,0.09 -0.09,-30.24 L 20.16,94.139998 18.922319,95.60862 17.37,97.019998" id="path21" filter="url(#filter21)"/>
          <rect fill="#d9d9c9" fillOpacity={1} stroke="none"
          filter="url(#filter19)" id="rect19" width="94.049995" height="3.8700001" x="59.399998" y="291.06" />
          <path fill="#334155aa" stroke="#ffffff" strokeWidth={0.722759}strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 48.77993,292.96441 H 198.37219 L 177.07638,271.66858 V 31.330004 L 154.82442,9.0780421 H 10.186687 V 86.872982 l 17.471265,17.471278 v 167.75893 z" id="path1"/>
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 116.14425,2.6458334 h 42.07011 l 15.559,15.5589936" id="path2" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,36.371466 199.1545,52.27814" id="path3" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,44.194421 199.1545,60.101096" id="path4" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,53.0009 199.1545,68.907574" id="path5" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,60.823855 199.1545,76.730529" id="path6" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,69.630333 199.1545,85.537007" id="path7" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,77.453288 15.90668,15.90667" id="path8" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,86.259759 199.1545,102.16645" id="path9" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="M 183.24782,94.082721 199.1545,109.98941" id="path10" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,102.88921 15.90668,15.90668" id="path11" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,110.71218 15.90668,15.90666" id="path12" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,119.51864 15.90668,15.90668" id="path13" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,127.3416 15.90668,15.90668" id="path14" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,136.14808 15.90668,15.90668" id="path15" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,143.97104 15.90668,15.90667" id="path16" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,152.77751 15.90668,15.90667" id="path17" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,160.60047 15.90668,15.90668" id="path18" />
          <path fill="none" stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} d="m 183.24782,269.18355 15.90668,15.90667" id="path31" />
        </g>

        <motion.path fill="#ffffff" fillOpacity={1} stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "M 199.1545,176.50715 V 285.09022 L 183.24782,269.18355 V 160.60047 Z" }}
          whileHover={{ d: "M 199.1545,52.27814 V 285.09022 L 183.24782,269.18355 V 36.37146 Z" }}
          whileTap={{ d: "M 199.1545,52.27814 V 285.09022 L 183.24782,269.18355 V 36.37146 Z" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path32" className="select-none"/>
        
        <path fill="#ffffff" fillOpacity={1} stroke="#ffffff" strokeWidth={0.722759} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} d="M 21.262293,141.77784 V 258.06572" id="path33" />


        <motion.path
          fill="none"
          stroke="#ffffff"
          strokeWidth={3.61379}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="none"
          strokeOpacity={1}
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />




        <path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} d="m 32.072647,276.3875 12.292587,12.29258" id="path35" />
        <path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} d="m 18.92232,95.608614 8.735632,8.735646 v 29.2057" id="path37" />

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "m 10.186687,52.191217 v 0 h 4.606849" }} 
          animate={{ d: "m 10.186687,52.191217 v 0 h 4.606849" }} 
          whileHover={{ d: "m 10.186687,52.191217 v 0 l 34.644746,0" }} 
          whileTap={{ d: "m 10.186687,52.191217 v 0 l 34.644746,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="path38" />

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{d: "m 10.186687,78.267735 v 0 h 4.606849"}}
          animate={{d: "m 10.186687,78.267735 v 0 h 4.606849"}}
          whileHover={{ d: "m 10.186687,78.267735 v 0 l 37.954005,0" }}
          whileTap={{ d: "m 10.186687,78.267735 v 0 l 37.954005,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path41" />

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "m 10.186687,42.977515 v 0 h 4.606859" }}
          animate={{ d: "m 10.186687,42.977515 v 0 h 4.606859" }}
          whileHover={{ d: "m 10.186687,42.977515 v 0 l 34.644746,0" }}
          whileTap={{ d: "m 10.186687,42.977515 v 0 l 34.644746,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path42" className="select-none"/>

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "m 10.186687,33.589969 v 0 h 4.606849" }}
          animate={{ d: "m 10.186687,33.589969 v 0 h 4.606849" }}
          whileHover={{ d: "m 10.186687,33.589969 v 0 l 39.226797,0" }}
          whileTap={{ d: "m 10.186687,33.589969 v 0 l 39.226797,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path43" className="select-none"/>

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "m 10.186687,69.662483 v 0 h 4.606849" }}
          animate={{ d: "m 10.186687,69.662483 v 0 h 4.606849" }}
          whileHover={{ d: "m 10.186687,69.662483 v 0 l 34.644746,0" }}
          whileTap={{ d: "m 10.186687,69.662483 v 0 l 34.644746,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path44" />

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "m 10.186688,60.448782 v 0 h 4.60685" }}
          animate={{ d: "m 10.186688,60.448782 v 0 h 4.60685" }}
          whileHover={{ d: "m 10.186688,60.448782 v 0 l 34.644746,0" }}
          whileTap={{ d: "m 10.186688,60.448782 v 0 l 34.644746,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path45" />

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} 
          initial={{ d: "m 10.186688,24.115502 v 0 h 4.60685" }}
          animate={{ d: "m 10.186688,24.115502 v 0 h 4.60685" }}
          whileHover={{ d: "m 10.186688,24.115502 v 0 l 39.226797,0" }}
          whileTap={{ d: "m 10.186688,24.115502 v 0 l 39.226797,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path46" className="select-none"/>

        <motion.path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1}  
          initial={{ d: "m 10.186687,14.727956 v 0 h 4.606849" }}
          animate={{ d: "m 10.186687,14.727956 v 0 h 4.606849" }}
          whileHover={{ d: "m 10.186687,14.727956 v 0 l 39.226797,0" }}
          whileTap={{ d: "m 10.186687,14.727956 v 0 l 39.226797,0" }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          id="path47" className="select-none"/>

        <path fill="none" stroke="#ffffff" strokeWidth={3.61379} strokeLinecap="butt" strokeLinejoin="miter" strokeDasharray="none" strokeOpacity={1} d="M 59.322118,292.96441 H 153.19757" id="path19" />
        <path fill="#d9d9c9" fillOpacity={1} stroke="none" strokeWidth={2.64583} d="m 18.922319,95.60862 10e-7,-8e-6" id="path20" />

        <motion.g
          initial={{ x: 0 }}
          animate={{ x: [0, -90, 0] }}
          transition={{duration: 3.5,ease: "easeInOut",repeat: Infinity, repeatType: "reverse",}}
        >
          <path fill="#d9d9c9" fillOpacity={1} stroke="none" 
            d= "m 111.37689,7.5581008 39.51,0.066084 -0.18,2.9077138 -39.42,-0.06608"
            id="path23" filter="url(#filter23)"/>
          <path fill="none" fillOpacity={1} stroke="#ffffff" strokeWidth={2.64583} strokeOpacity={1} 
            d= "m 109.04858,9.0780419 h 39.24"
            id="path22" />
        </motion.g>


        
        {/* <motion.path
          d={
            hovered
              ? "M10 80 C40 10, 65 10, 95 80 S150 150, 180 80"
              : "M10 80 C40 100, 65 100, 95 80 S150 50, 180 80"
          }
          fill="none"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M50 150 C75 50, 125 50, 150 150"
          fill="none"
          stroke={hovered ? "#ff0000" : "#ffffff"}
          strokeWidth="2"
          transition={{ duration: 0.5 }}
        /> */}
      </svg>
    </div>
  );
};

export default AnimatedSVG;
