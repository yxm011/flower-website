import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Products = () => {
  const { addToCart } = useCart()
  
  const products = [
    {
      id: 1,
      name: 'Qırmızı Qızılgüllər',
      price: 45,
      emoji: '🌹',
      description: 'Klassik romantik buket',
      color: 'from-red-100 to-red-200'
    },
    {
      id: 4,
      name: 'Çəhrayı Lalələr',
      price: 35,
      emoji: '🌷',
      description: 'Bahar təravəti',
      color: 'from-pink-100 to-pink-200'
    },
    {
      id: 9,
      name: 'Qarışıq Buket',
      price: 55,
      emoji: '💐',
      description: 'Rəngarəng gül kompozisiyası',
      color: 'from-purple-100 to-purple-200'
    },
    {
      id: 7,
      name: 'Ağ Orkideyalar',
      price: 65,
      emoji: '🌺',
      description: 'Zərif və nəfis',
      color: 'from-blue-100 to-blue-200'
    },
    {
      id: 10,
      name: 'Günəbaxan Buketi',
      price: 40,
      emoji: '🌻',
      description: 'Şən və parlaq',
      color: 'from-yellow-100 to-yellow-200'
    },
    {
      id: 13,
      name: 'Toy Buketi',
      price: 120,
      emoji: '💒',
      description: 'Xüsusi gün üçün',
      color: 'from-pink-100 to-pink-300'
    }
  ]

  return (
    <section id="products" className="py-16 sm:py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Məhsullarımız
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hər zövqə uyğun təzə və keyfiyyətli güllər
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${product.color} p-8 sm:p-12 flex items-center justify-center`}>
                <div className="text-8xl sm:text-9xl transform group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{product.price} AZN</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium text-lg"
          >
            Bütün Məhsulları Gör
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
