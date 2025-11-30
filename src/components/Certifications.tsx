import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding',
      year: '2025',
      description: 'Sertifikasi Belajar Dasar Ai dari Dicoding yang mencakup konsep dasar kecerdasan buatan',
    },
    {
      title: 'JavaScript Dasar',
      issuer: 'Codepolitan',
      year: '2025',
      description: 'Belajar dasar-dasar pemrograman JavaScript untuk pengembangan web',
    },
    {
      title: 'Network Fundamentals',
      issuer: 'Aguna Course',
      year: '2025',
      description: 'Belajar dasar-dasar jaringan komputer dan konsep-konsep penting dalam networking',
    },
    {
      title: 'Practical Basic Penetration Testing',
      issuer: 'Linux Hacking ID',
      year: '2025',
      description: 'Belajar teknik dasar penetration testing untuk keamanan siber',
    },
    {
      title: 'Introduction to IoT and Digital Transformation',
      issuer: 'Cisco Networking Academy',
      year: '2025',
      description: 'Memahami konsep Internet of Things (IoT) dan dampaknya pada transformasi digital',
    },
    {
      title: 'Lomba Desain Poster Hari Valentine',
      issuer: 'Excellent Florancia Event Organizer',
      year: '2024',
      description: 'Juara 1 Terfavorit Lomba Desain Poster Hari Valentine tingkat Nasional',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Sertifikasi & Pelatihan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sertifikasi dan pelatihan yang telah saya ikuti untuk meningkatkan kemampuan profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-gray-500">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{cert.description}</p>
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle size={16} />
                <span>{cert.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Training Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-center mb-6">Komitmen Pembelajaran Berkelanjutan</h3>
            <p className="text-blue-100 text-center mb-8">
              Saya percaya bahwa pembelajaran adalah proses yang tidak pernah berhenti. 
              Selain sertifikasi formal, saya juga aktif mengikuti workshop, webinar, 
              dan terus belajar dari berbagai sumber untuk tetap update dengan 
              perkembangan teknologi dan tren industri kreatif.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="text-blue-100 mb-2">Workshop Diikuti</p>
                <p>2</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="text-blue-100 mb-2">Online Courses</p>
                <p>5</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <p className="text-blue-100 mb-2">Webinar</p>
                <p>20+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
