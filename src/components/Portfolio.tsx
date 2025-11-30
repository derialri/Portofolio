import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: "photography",
      title: "Wedding Photography",
      description: "Dokumentasi pernikahan Rian Hidayat & Lia Rosalia dengan moment yang indah",
      image: "/public/assets/Portfolio/Wedding_rian&lia.jpg",
    },
    {
      id: 2,
      category: "photography",
      title: "Event Photography",
      description: "Dokumentasi main padel di Padel Pro Kemang",
      image: "/public/assets/Portfolio/Padel.jpg",
    },
    {
      id: 3,
      category: "videography",
      title: "Video Production",
      description: "Graduation Fatarur Rahman Universitas Nasional",
      image: "/public/assets/Portfolio/Grad_fatarur.jpg",
    },
    {
      id: 4,
      category: "photography",
      title: "Professional Photography",
      description: "Graduation Yuanda Hana Universitas Islam Negeri Sultan Hasanuddin Banten",
      image: "/public/assets/Portfolio/Grad_yuanda.jpg",
    },
    {
      id: 5,
      category: "photography",
      title: "Professional Photography",
      description: "Graduation Couple Ujang & Friska Universitas Islam Negeri Sultan Hasanuddin Banten",
      image: "/public/assets/Portfolio/Grad_ujang&friska.jpg",
    },
    {
      id: 6,
      category: "photography",
      title: "Professional Photography",
      description: "Yearbook SMA Negeri 1 Pamarayan Banten",
      image: "/public/assets/Portfolio/yearbook.jpg",
    },
    {
      id: 7,
      category: "photography",
      title: "Professional Photography",
      description: "Sempro Lia Septiani STKIP Syekh Mansur Banten",
      image: "/public/assets/Portfolio/Grad_lia.jpg",
    },
    {
      id: 8,
      category: "photography",
      title: "Wedding Photography",
      description: "Dokumentasi pernikahan Wiwi Wiarsih & Juprana dengan moment yang indah",
      image: "/public/assets/Portfolio/Wedding_wiwi&njup.jpg",
    },
    {
      id: 9,
      category: "photography",
      title: "Wedding Photography",
      description: "Dokumentasi pernikahan Euis Permata Sari & Jaja dengan moment yang indah",
      image: "/public/assets/Portfolio/wedding_eusi&jaja.jpg",
    },
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'photography', label: 'Fotografi' },
    { id: 'videography', label: 'Videografi' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Portofolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Beberapa karya terbaik dari proyek fotografi dan videografi yang
            telah saya kerjakan
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Sarvatra.id */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl">
          <h3 className="text-gray-900 mb-4">Tertarik dengan Layanan Kami?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Untuk melihat lebih banyak karya dan informasi lengkap tentang
            layanan fotografi, videografi, dan desain grafis, kunjungi website
            Sarvatra.id
          </p>
          <a
            href="https://www.instagram.com/sarvatraid_?igsh=MW0yN2p0MHNscXFraw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Kunjungi Sarvatra.id
          </a>
        </div>
      </div>
    </section>
  );
}
