import AnimatedSVG from "./AnimatedSVG";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Layanan() {
  const services = [
    {
      title: "Modeling 3D Profesional",
      description: "Buat model 3D detail dan realistis sesuai kebutuhan proyek Anda, baik untuk produk, arsitektur, maupun animasi."
    },
    {
      title: "Animasi 3D yang Memukau",
      description: "Hidupkan ide Anda dengan animasi 3D yang halus dan menarik, sempurna untuk presentasi, video promosi, atau konten digital."
    },
    {
      title: "Motion Graphics Dinamis",
      description: "Tambahkan elemen visual bergerak yang kreatif dan informatif untuk meningkatkan daya tarik konten Anda."
    },
    {
      title: "Rigging Custom",
      description: "Nikmati kemudahan dalam menggerakkan model 3D Anda dengan sistem rigging yang disesuaikan sesuai kebutuhan animasi."
    },
    {
      title: "Desain Website 3D Interaktif",
      description: "Buat website modern dengan elemen 3D interaktif yang memberikan pengalaman unik bagi pengunjung."
    }
  ];

  return (
    <>
      <section id="layanan" className="relative shadow-lg rounded-3xl lg:border lg:border-slate-100/10">
        <AnimatedSVG />
        <div className="absolute z-10 top-44 bottom-44 left-[70px] right-20 lg:top-[75vh] lg:bottom-[55vh] lg:right-[23vw] lg:left-[23vw]">
          <motion.h2
            className="text-white text-md lg:text-2xl lg:text-center lg:mb-5 mx-auto mt-1 lg:-mt-[360px] font-monos"
            style={{ filter: "drop-shadow(0px 0px 15px #ffffff88)" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            Layanan 3D Terbaik untuk Proyek Anda
          </motion.h2>

          <p className="text-gray-200 text-sm lg:text-lg font-monos mb-12 lg:text-center lg:max-w-[800px] m-auto
          ">
            Kami menghadirkan solusi kreatif dengan kualitas terbaik di setiap detail.
            Temukan layanan yang sesuai dengan kebutuhan Anda!
          </p>

          <Swiper
            modules={[Pagination, Autoplay ]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper -mt-10"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="py-3 font-monos pb-10 text-right lg:text-center">
                  <h3 className="text-md lg:text-2xl font-semibold text-gray-200 mb-2 mt-64 lg:mt-80">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm lg:text-lg lg:max-w-[800px] lg:m-auto">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
