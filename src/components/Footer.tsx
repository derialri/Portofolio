import { Heart, Camera, Code } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="mb-4">Portfolio</h4>
            <p className="text-gray-400">
              Mahasiswa Informatika UPN Veteran Jakarta & Co-founder
              Sarvatra.id. Menggabungkan passion di teknologi dan seni visual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pengalaman
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Layanan</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Camera size={18} />
                <span>Fotografi & Videografi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Code size={18} />
                <span>Web Development</span>
              </div>
              <a
                href="https://www.instagram.com/sarvatraid_?igsh=MW0yN2p0MHNscXFraw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Visit Sarvatra.id →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Portfolio.</span>
            <span className="flex items-center gap-1">
              Made with Deri Alghifary
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
