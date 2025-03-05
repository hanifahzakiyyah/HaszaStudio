import { Facebook, Instagram, Github, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-700/50 backdrop-blur-sm p-10 mt-32 font-monos text-white">
            <div className="flex flex-col lg:flex-row justify-center gap-6">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold">HZS-Studio</h2>
                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="link social media hzs-studio">
                            <Facebook size={24} className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="link social media hzs-studio">
                            <Instagram size={24} className="hover:text-pink-500 transition" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="link social media hzs-studio">
                            <Github size={24} className="hover:text-gray-400 transition" />
                        </a>
                        <a href="https://wa.me/6282231259145" target="_blank" rel="noopener noreferrer" aria-label="link social media hzs-studio">
                            <Phone size={24} className="hover:text-green-500 transition" />
                        </a>
                    </div>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-semibold">Hubungi Kami</h2>
                    <p>Yogyakarta, Indonesia</p>
                    <p>Telepon / WA: <a href="https://wa.me/6282231259145" className="text-blue-300 hover:underline">082231259145</a></p>
                    <p>Email: <a href="mailto:hanifahzakiyyatus@gmail.com" className="text-blue-300 hover:underline">hanifahzakiyyatus@gmail.com</a></p>
                </div>
            </div>
        </footer>
    );
}
