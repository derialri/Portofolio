import { Camera, Video, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Profil from "@/assets/Profil.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <ImageWithFallback
              src="/assets/Profil/Profil.jpg"
              alt="Profile"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4">
          Halo, Saya{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Deri Alghifary
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Mahasiswa Informatika UPN Veteran Jakarta | Co-founder Sarvatra.id
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Camera className="text-blue-300" size={20} />
            <span className="text-white">Fotografi</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Video className="text-blue-300" size={20} />
            <span className="text-white">Videografi</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <Code className="text-blue-300" size={20} />
            <span className="text-white">Web Development</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Lihat Portofolio
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-all"
          >
            Hubungi Saya
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
