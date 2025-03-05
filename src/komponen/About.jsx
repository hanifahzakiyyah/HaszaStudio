export default function About (){
    return(
        <section id="about" className="font-monos w-full m-auto mt-48">
            <div className="flex flex-col lg:flex-row lg:max-w-[1700px] m-auto">
                
                <div className="order-1 lg:p-10 flex lg:items-center lg:max-w-[50vw] lg:-mr-32">
                    <div className="bg-slate-700/50 backdrop-blur-sm lg:rounded-3xl p-10 lg:pr-32">
                        <p className="text-gray-200 text-sm lg:text-lg font-monos text-center">T E N T A N G  K A M I</p>
                        <h2 className="text-white text-2xl lg:text-4xl font-bold text-center mb-10">Apa itu HZS-Studio</h2>
                        <p className="text-gray-200 text-sm lg:text-lg font-monos text-center">
                            HZS-Studio adalah studio freelance yang berfokus pada layanan 3D, mencakup modeling, texturing, dan animasi. Dengan pengalaman lebih dari dua tahun, HZS-Studio telah mengerjakan berbagai proyek, termasuk modeling low-poly, sculpting, texturing, animasi, dan rendering. <br />

                            HZS-Studio berkomitmen untuk memberikan hasil berkualitas tinggi dalam berbagai bidang, seperti visualisasi arsitektur, desain interior, pembuatan karakter, aset game, cetak 3D, dan animasi logo. Selain itu, HZS-Studio juga menawarkan layanan pengembangan website, termasuk website berbasis 3D yang interaktif.
                        </p>
                    </div>
                </div>

                <div className="order-2 relative z-[2]">
                    <img src="/about.webp" alt="salah satu hasil karya 3d hzs-studio" className="w-full lg:rounded-3xl"/>
                </div>
            </div>
        </section>
    )
}