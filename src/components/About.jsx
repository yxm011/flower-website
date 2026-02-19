import React from 'react'
import { MapPin, Clock, Truck } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
              Haqqımızda
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Gard Buket olaraq, hər bir çiçəyin öz hekayəsi olduğuna inanırıq. 
              Biz sizin xüsusi anlarınızı ən təzə və gözəl güllərlə bəzəmək üçün buradayıq.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Peşəkar komandamız hər bir buketi sevgi və qayğı ilə hazırlayır. 
              Keyfiyyət və müştəri məmnuniyyəti bizim əsas prioritetimizdir.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Çatdırılma Xidməti</h3>
                  <p className="text-gray-600">Sürətli və etibarlı çatdırılma mövcuddur</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">İş Saatları</h3>
                  <p className="text-gray-600">Hər gün 9:00-dan 02:00-a kimi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ünvan</h3>
                  <a 
                    href="https://maps.app.goo.gl/DmVg145cYKkoaRys6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 underline"
                  >
                    Xəritədə bax
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-6xl">🌸</div>
                <div className="text-6xl">🌹</div>
                <div className="text-6xl">🌺</div>
                <div className="text-6xl">🌷</div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 text-xl font-semibold">
                  Hər gün təzə güllər
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
