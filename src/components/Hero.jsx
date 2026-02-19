import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-pink-500 text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
                Toxumdan Təbəssümə
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Hər ləçək davamlılıq hekayəsi danışır
              </h1>
            </div>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Təzə güllərimizin müxtəlifliyindən hədiyyə vermənin sevincini yaşayın. 
              Yaradıcı şəkildə hazırlanmış buketlər və fərdiləşdirilmiş çiçək xidmətləri 
              xoşbəxtliyi yaymaq və həyatın gözəl anlarını qeyd etmək üçün nəzərdə tutulub.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                İndi Alış-veriş Et
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 bg-white text-pink-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-pink-50 transition-all duration-200 border-2 border-pink-500 font-medium"
              >
                Kataloqu Kəşf Et
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-sm sm:text-base mt-1">Toy buketləri</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 text-sm sm:text-base mt-1">Tədbir bəzəyi</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-pink-300 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10 text-center py-8 sm:py-12">
                <div className="text-7xl sm:text-8xl lg:text-9xl mb-4">🌸</div>
                <p className="text-gray-700 text-base sm:text-lg font-medium">Təzə Gül Kolleksiyası</p>
              </div>

              <div className="hidden sm:block absolute top-4 right-4 lg:top-8 lg:right-8 bg-white rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl max-w-[200px] lg:max-w-none">
                <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Xüsusi Buket Dizaynı</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Unikal və fərdiləşdirilmiş buketlər</p>
                <div className="flex gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl">🌹</span>
                  <span className="text-xl sm:text-2xl">🌺</span>
                  <span className="text-xl sm:text-2xl">🌷</span>
                </div>
              </div>

              <div className="hidden sm:block absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-white rounded-2xl p-3 sm:p-4 shadow-xl max-w-[180px] lg:max-w-none">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Tədbir Çiçək Xidmətləri</h3>
                <p className="text-xs sm:text-sm text-gray-600">Çiçək Abunəliyi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
