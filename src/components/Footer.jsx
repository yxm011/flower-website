import React from 'react'
import { Phone, MapPin, Clock, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Bizim Ünvan
            </h2>
            <p className="text-gray-600 text-lg">
              Bizimlə görüşmək üçün mağazamıza gəlin
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0!2d49.8!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAwLjAiTiA0OcKwNDgnMDAuMCJF!5e0!3m2!1sen!2saz!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gard Buket Location"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/DmVg145cYKkoaRys6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium text-lg"
            >
              <MapPin size={24} />
              Google Maps-də Aç
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Gard Buket.</h3>
            <p className="text-gray-400">
              Hər ləçək davamlılıq hekayəsi danışır
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Əlaqə</h4>
            <div className="space-y-3">
              <a 
                href="tel:+994702197070"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Phone size={18} />
                <span>+994 (70) 219 70 70</span>
              </a>
              <a 
                href="https://instagram.com/gard.buket"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@gard.buket</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">İş Saatları</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={18} />
                <span>9:00 - 02:00</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>🕊️</span>
                <span>Çatdırılma mövcud</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ünvan</h4>
            <a 
              href="https://maps.app.goo.gl/DmVg145cYKkoaRys6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-400 hover:text-pink-400 transition-colors"
            >
              <MapPin size={18} className="flex-shrink-0 mt-1" />
              <span>Xəritədə bax</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Gard Buket. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Məxfilik Siyasəti
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                İstifadə Şərtləri
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 text-2xl">
            <span>🌸</span>
            <span>+994 (70) 219 70 70</span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
