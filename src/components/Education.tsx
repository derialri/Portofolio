import { GraduationCap, BookOpen, Trophy } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Pendidikan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan pendidikan formal yang membentuk fondasi pengetahuan saya
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Education */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={40} />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full mb-3">
                      Sedang Berlangsung
                    </span>
                    <h3 className="text-gray-900 mb-2">Sarjana Informatika (S1)</h3>
                    <p className="text-gray-700 mb-2">
                      Universitas Pembangunan Nasional Veteran Jakarta
                    </p>
                    <p className="text-gray-600">
                      Fakultas Ilmu Komputer
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-gray-500">
                    2023 - Sekarang
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-900 mb-2">Fokus Studi:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                        Web Development
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                        Mobile Development
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                        Database Systems
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                        Software Engineering
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
                        Cyber Security
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 mb-2">Mata Kuliah Unggulan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Pemrograman Berorientasi Objek</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Struktur Data dan Algoritma</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Basis Data dan Sistem Informasi</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Interaksi Manusia dan Komputer</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Sistem Operasi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 mb-3">Aktivitas Akademik</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Anggota aktif KSM Cyber Security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Anggota Anon Cyber Team Regional Jabodetabek</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Partisipasi dalam project-based learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>Kolaborasi dalam tim untuk tugas kelompok</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 mb-3">Pencapaian</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Menyelesaikan berbagai project praktikum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Mengembangkan aplikasi web dan mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Aktif dalam kegiatan pengembangan skill</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Campus Life */}
          <div className="mt-8 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-10 text-white">
            <h3 className="text-center mb-6">Kehidupan Kampus</h3>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-8">
              Selama berkuliah di UPN Veteran Jakarta, saya tidak hanya fokus pada akademik, 
              tetapi juga aktif mengembangkan skill praktis melalui project freelance dan 
              menjalankan bisnis Sarvatra.id. Ini membantu saya mengaplikasikan teori yang 
              dipelajari di kampus ke dalam praktik nyata.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Teori + Praktik
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Learning by Doing
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Entrepreneurship
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
