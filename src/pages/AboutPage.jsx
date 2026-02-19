import React from 'react'
import { MapPin, Clock, Truck, Phone, Instagram, Award, Heart, Users } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Haqqımızda
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Gard Buket - Hər ləçək davamlılıq hekayəsi danışır
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-8xl">🌸</div>
                  <div className="text-8xl">🌹</div>
                  <div className="text-8xl">🌺</div>
                  <div className="text-8xl">🌷</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gard Buket</h3>
                  <p className="text-gray-700">Bakının ən gözəl gül mağazası</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Bizim Hekayəmiz
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Gard Buket olaraq, hər bir çiçəyin öz hekayəsi olduğuna inanırıq. 
                Biz sizin xüsusi anlarınızı ən təzə və gözəl güllərlə bəzəmək üçün buradayıq.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Peşəkar komandamız hər bir buketi sevgi və qayğı ilə hazırlayır. 
                Keyfiyyət və müştəri məmnuniyyəti bizim əsas prioritetimizdir.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                İstər doğum günü, istər toy, istərsə də sadəcə sevdiyiniz insanı sevindirmək 
                üçün - biz hər zaman sizin yanınızdayıq. Hər bir buketimiz fərdi olaraq 
                hazırlanır və sizin emosiyalarınızı ən gözəl şəkildə ifadə edir.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Premium Keyfiyyət</h3>
                <p className="text-gray-600 text-sm">Yalnız ən təzə və keyfiyyətli güllər</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Sevgi ilə Hazırlanır</h3>
                <p className="text-gray-600 text-sm">Hər buket fərdi diqqətlə yaradılır</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Peşəkar Komanda</h3>
                <p className="text-gray-600 text-sm">Təcrübəli floristlər və dizaynerlər</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Sürətli Çatdırılma</h3>
                <p className="text-gray-600 text-sm">Bakı üzrə pulsuz çatdırılma</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Əlaqə Məlumatları
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
              <a 
                href="tel:+994702197070"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                +994 (70) 219 70 70
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/gard.buket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                @gard.buket
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">İş Saatları</h3>
              <p className="text-gray-600">Hər gün</p>
              <p className="text-gray-600 font-medium">9:00 - 02:00</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ünvan</h3>
              <a 
                href="https://maps.app.goo.gl/DmVg145cYKkoaRys6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                Xəritədə bax
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-pink-50 px-8 py-4 rounded-full">
              <span className="text-2xl">🕊️</span>
              <span className="text-gray-700 font-medium text-lg">Çatdırılma mövcuddur</span>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Xüsusi Sifariş
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Fərdiləşdirilmiş buket və ya xüsusi tədbir üçün çiçək bəzəyi sifarişi vermək istəyirsiniz? 
            Bizimlə əlaqə saxlayın!
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=994702197070&text=Salam!%20Xüsusi%20sifariş%20haqqında%20məlumat%20almaq%20istəyirəm.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all duration-200 font-bold text-lg shadow-xl"
          >
            WhatsApp ilə Əlaqə
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
