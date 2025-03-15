import AnimatedSVG from "./AnimatedSVG";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";


export default function Layanan() {

  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/ilustrasi.json").then((res) => res.json()),
      fetch("/ilustrasi2.json").then((res) => res.json()),
    ]).then(([data1, data2]) => {
      setAnimations([data1, data2, data1, data2, data1]);
    });
  }, []);
  



  const services = [
    {
      id:1,
      title: "Modeling 3D",
      description: "Buat model 3D untuk produk, arsitektur, atau animasi dengan memperhatikan setiap detail dan ukurannya."
    },
    {
      id:2,
      title: "Video Animasi 3D",
      description: "Hidupkan ide Anda dengan video animasi 3D halus, ideal untuk presentasi dan promosi."
    },
    {
      id:3,
      title: "Video Motion Graphics",
      description: "Tambahkan elemen visual bergerak yang informatif dan menarik perhatian."
    },
    {
      id:4,
      title: "Rigging 3D Custom",
      description: "Rigging kendaraan, makhluk-makhluk fantasi, yang default rig-nya belum ada di peredaran."
    },
    {
      id:5,
      title: "Website 3D dan non3D Interaktif",
      description: "Buat website modern dengan elemen 3D interaktif yang memikat pengunjung."
    }
  ];    

  return (
    <>
      <section id="layanan" className="relative shadow-lg rounded-3xl lg:border lg:border-slate-100/10">
        <AnimatedSVG />
        <div className="absolute z-10 left-0 right-0 top-0 bottom-0 m-auto aspect-[210/297] w-[70%] lg:aspect-[297/210] lg:mt-[36vw] lg:w-[50%]">
        
          <motion.p className="text-gray-200 text-sm lg:text-lg font-monos text-center lg:invisible" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            L A Y A N A N
          </motion.p>
          
          <motion.h2
            className="text-white text-2xl lg:text-4xl font-bold text-center lg:mb-20 mx-auto lg:-mt-[360px] font-monos"
            style={{ filter: "drop-shadow(0px 0px 15px #ffffff88)" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            Beberapa Layanan Kami untuk Proyek Anda
          </motion.h2>

          <Swiper
            modules={[Pagination, Autoplay ]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper -mt-10"
            autoplay={{ delay: 7000, disableOnInteraction: false }}
          
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <div className="py-3 font-monos pb-10 text-center flex flex-col lg:flex-row items-center justify-evenly">
                  {animations.length > 0 ? <Lottie key={index} animationData={animations[index]} className="w-72 max-[440px]:w-[150px] 2xl:w-[380px] mt-10"/> : null}
                  <div>
                    <motion.h3 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }} className="text-md lg:text-2xl font-semibold text-gray-200 mb-2 " >
                      {service.title}
                    </motion.h3>
                    <motion.p initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 10 }} className="text-gray-200 text-sm lg:text-lg lg:max-w-[300px] lg:m-auto">{service.description}</motion.p>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
