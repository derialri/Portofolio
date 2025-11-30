import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 mb-4">Hubungi Saya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau membutuhkan jasa fotografi,
            videografi, atau web development? Mari kita diskusikan!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 mb-6">Informasi Kontak</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    derialghifary@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">WhatsApp</p>
                  <a
                    href="tel:+6281234567890"
                    className="text-gray-600 hover:text-green-600"
                  >
                    +62 882-1971-3283
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Lokasi</p>
                  <p className="text-gray-600">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-gray-900 mb-4">Media Sosial</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/rii.al_ghifary?igsh=MW44Y2xycjUwMGs0OA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/deri-alghifary-3b4a04285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://github.com/derialri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Github className="text-white" size={24} />
                </a>
              </div>
            </div>

            {/* Sarvatra.id Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <h4 className="text-gray-900 mb-2">Sarvatra.id</h4>
              <p className="text-gray-600 mb-4">
                Untuk layanan fotografi, videografi, dan desain grafis
                profesional
              </p>
              <a
                href="https://www.instagram.com/sarvatraid_?igsh=MW0yN2p0MHNscXFraw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kunjungi Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-gray-900 mb-6">Kirim Pesan</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-white" size={32} />
                </div>
                <h4 className="text-gray-900 mb-2">Pesan Terkirim!</h4>
                <p className="text-gray-600">
                  Terima kasih telah menghubungi saya. Saya akan segera
                  merespons pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Topik pesan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
