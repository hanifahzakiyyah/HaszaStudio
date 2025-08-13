export default function About ({bahasa}){
    return(
        <section id="about" className="font-monos w-full m-auto mt-48">
            <div className="flex flex-col lg:flex-row lg:max-w-[1700px] m-auto">
                
                <div className="order-1 lg:p-10 flex lg:items-center lg:max-w-[50vw] lg:-mr-32">
                    <div className="bg-slate-700/50 backdrop-blur-sm lg:rounded-3xl p-10 lg:pr-32">
                        <p className="text-gray-200 text-sm lg:text-lg font-monos text-center">
                            {bahasa=='ind' ? 'T E N T A N G  K A M I' : 'A B O U T - U S' }
                        </p>
                        <h2 className="text-white text-2xl lg:text-4xl font-bold text-center mb-10">
                            {bahasa=='ind' ? 'Apa itu Hasza-Studio' : 'Who are we and what we do?' }
                        </h2>
                        <p className="text-gray-200 text-sm lg:text-lg font-monos text-center">
                            {bahasa=='ind' ? (
                                <>
                                    Hasza-Studio adalah studio freelance yang berfokus pada layanan 3D, mencakup modeling, texturing, dan animasi. Dengan pengalaman lebih dari dua tahun, Hasza-Studio telah mengerjakan berbagai proyek, termasuk modeling low-poly, sculpting, texturing, animasi, dan rendering. <br />

                                    Hasza-Studio berkomitmen untuk memberikan hasil berkualitas tinggi dalam berbagai bidang, seperti visualisasi arsitektur, desain interior, pembuatan karakter, aset game, cetak 3D, dan animasi logo. Selain itu, Hasza-Studio juga menawarkan layanan pengembangan website, termasuk website berbasis 3D yang interaktif.
                                </>
                            ) : (
                                <>
                                    Hasza-Studio is a freelance studio specializing in 3D services, including modeling, texturing, and animation. With over two years of experience, Hasza-Studio has handled various projects, such as low-poly modeling, sculpting, texturing, animation, and rendering. <br />

                                    Hasza-Studio is committed to delivering high-quality results across a wide range of areas, including architectural visualization, interior design, character creation, game assets, 3D printing, and logo animation. In addition, Hasza-Studio also offers website development services, including interactive 3D-based websites.
                                </>
                            )}
                            
                        </p>
                    </div>
                </div>

                <div className="order-2 relative z-[2]">
                    <img src="/about.webp" alt="salah satu hasil karya 3d Hasza-studio" className="w-full lg:rounded-3xl"/>
                </div>
            </div>
        </section>
    )
}