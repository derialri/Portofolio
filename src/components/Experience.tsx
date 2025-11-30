import { Briefcase, Camera, Code, LayoutPanelLeft, Scissors, Shield, Users, Video } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Co-founder & Creative Director",
      company: "Sarvatra.id",
      period: "2024 - Sekarang",
      type: "Vendor Fotografi, Videografi & Desain Grafis",
      icon: Camera,
      color: "blue",
      responsibilities: [
        "Tim kreatif dalam eksekusi proyek fotografi dan videografi",
        "Mengelola operasional dan strategi bisnis vendor",
        "Melayani klien untuk berbagai kebutuhan dokumentasi acara",
        "Mengembangkan branding dan portfolio perusahaan",
      ],
    },
    {
      title: "Freelance Photographer & Videographer",
      company: "Independent & Tim Sarvatra.id",
      period: "2024 - Sekarang",
      type: "Fotografi & Videografi",
      icon: Camera,
      color: "purple",
      responsibilities: [
        "Dokumentasi acara pernikahan, wisuda, dan corporate events",
        "Produksi konten kreatif untuk media sosial",
        "Editing foto dan video profesional",
        "Konsultasi konsep visual untuk klien",
      ],
    },
    {
      title: "KSM Cyber Security",
      company: "UPN Veteran Jakarta",
      period: "2024 - Sekarang",
      type: "Divisi Multimedia",
      icon: Shield,
      color: "blue",
      responsibilities: [
        "Mengembangkan materi visual untuk edukasi keamanan siber (poster, animasi, infografis)",
        "Mendesain branding visual untuk event, webinar, workshop, dan kompetisi KSM",
        "Melakukan dokumentasi foto/video kegiatan internal dan eksternal organisasi",
        "Mengelola konten media sosial KSM, termasuk editing, layout, dan posting terjadwal",
        "Bekerja sama dengan divisi lain untuk kebutuhan visual",
      ],
    },
    {
      title: "Web Developer",
      company: "Freelance Projects",
      period: "2025 - Sekarang",
      type: "Pengembangan Web",
      icon: Code,
      color: "indigo",
      responsibilities: [
        "Mengembangkan website menggunakan React.js dan modern frameworks",
        "Membuat landing page dan company profile",
        "Implementasi responsive design dan UI/UX best practices",
        "Maintenance dan update website klien",
      ],
    },
    {
      title: "Anggota Div Videografi",
      company: "UKM UFO UPN Veteran Jakarta",
      period: "2023 - 2024",
      type: "Videografi",
      icon: Video,
      color: "purple",
      responsibilities: [
        "Mempelajari teknik dasar dan lanjutan videografi (cinematic, dokumenter, storytelling)",
        "Mengoperasikan peralatan videografi: kamera, stabilizer, drone, audio gear, lighting",
        "Menghasilkan karya video kreatif sebagai portofolio anggota UFO",
        "Mengelola proses produksi film pendek, video dokumentasi, iklan, atau konten sosial media",
        "Bekerja sama dengan divisi lain untuk produksi konten visual berkualitas.",
      ],
    },
    {
      title: " Creative",
      company: "PT Tumbuh Global Indonesia",
      period: "31 Mei 2025 - 11 Juli 2025",
      type: "Video Associate",
      icon: LayoutPanelLeft,
      color: "indigo",
      responsibilities: [
        "Melakukan editing video untuk kebutuhan konten digital perusahaan, termasuk social media, kampanye produk, dan materi promosi",
        "Berkolaborasi dengan tim kreatif dan marketing dalam menyusun konsep video serta memahami kebutuhan brand",
        "Memotong, menyusun, dan merapikan footage menjadi video yang utuh sesuai standar kualitas perusahaan",
        "Melakukan color correction dan color grading untuk menciptakan tone visual yang konsisten",
        "Mencari reference dan trend terbaru untuk meningkatkan kualitas konten video",
      ],
    },
  ];
  
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; badge: string }> = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-600',
        badge: 'bg-blue-100 text-blue-700',
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-600',
        badge: 'bg-purple-100 text-purple-700',
      },
      indigo: {
        bg: 'bg-indigo-50',
        icon: 'bg-indigo-600',
        badge: 'bg-indigo-100 text-indigo-700',
      },
    };
    return colors[color];
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Pengalaman</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan profesional saya dalam dunia fotografi, videografi, dan teknologi
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const colors = getColorClasses(exp.color);
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-gray-700 mb-2">{exp.company}</p>
                        <span className={`inline-block px-3 py-1 rounded-full ${colors.badge}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="text-gray-500">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-center text-gray-900 mb-8">Keahlian & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Adobe Lightroom', category: 'Photography' },
              { name: 'Adobe Premiere Pro', category: 'Video Editing' },
              { name: 'React.js', category: 'Web Development' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'Canva', category: 'Design' },
              { name: 'DaVinci Resolve', category: 'Color Grading' },
              { name: 'JavaScript/TypeScript', category: 'Programming' },
              { name: 'Figma', category: 'UI/UX Design' },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
              >
                <p className="text-gray-900">{skill.name}</p>
                <p className="text-gray-500 text-sm mt-1">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
