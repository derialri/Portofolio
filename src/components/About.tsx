import { User, Briefcase, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Tentang Saya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Menggabungkan passion di dunia teknologi dan seni visual untuk menciptakan karya yang bermakna
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <User className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900 mb-4">Mahasiswa Informatika</h3>
            <p className="text-gray-600">
              Menempuh pendidikan di Fakultas Ilmu Komputer UPN Veteran Jakarta angkatan 2023. 
              Pengembangan web dan mobile application dengan teknologi terkini. Memiliki ketertarikan kuat di bidang
              Cyber Security, Fotografi, Videografi, Fullstack Developer, dan Desain Grafis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900 mb-4">Co-founder Sarvatra.id</h3>
            <p className="text-gray-600">
              Salah satu pendiri vendor profesional yang bergerak di bidang fotografi, videografi, 
              dan desain grafis. Melayani berbagai kebutuhan dokumentasi acara dan konten kreatif.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900 mb-4">Passion & Dedikasi</h3>
            <p className="text-gray-600">
              Memiliki passion yang tinggi dalam mengabadikan momen berharga melalui lensa kamera 
              dan mengembangkan solusi digital yang inovatif dan user-friendly.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">Visi & Misi</h3>
            <p className="text-blue-100 mb-6">
              Saya berkomitmen untuk terus berkembang dalam dua bidang yang saya geluti. 
              Di bidang teknologi, saya ingin menciptakan aplikasi yang memberikan dampak positif. 
              Di bidang fotografi dan videografi, saya berusaha mengabadikan setiap momen dengan 
              sempurna dan bercerita melalui visual yang kuat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Kreativitas
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Profesionalisme
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Inovasi
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Dedikasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
