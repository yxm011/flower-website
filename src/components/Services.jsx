import React from 'react'
import { Flower2, Gift, Calendar, Heart } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Flower2 className="w-8 h-8" />,
      title: 'Təzə Buketlər',
      description: 'Hər gün təzə toplanan güllərdən hazırlanmış buketlər'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Hədiyyə Paketləri',
      description: 'Xüsusi günlər üçün fərdiləşdirilmiş hədiyyə paketləri'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Tədbir Bəzəyi',
      description: 'Toy və tədbir üçün professional çiçək dizaynı'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Çiçək Abunəliyi',
      description: 'Müntəzəm çiçək çatdırılması xidməti'
    }
  ]

  return (
    <section id="catalog" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Xidmətlərimiz
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hər anınızı xüsusi etmək üçün geniş çiçək xidmətləri
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
