import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Catalog = () => {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('Hamısı')

  const categories = ['Hamısı', 'Qızılgüllər', 'Lalələr', 'Orkideyalar', 'Buketlər', 'Toy Güllər']

  const products = [
    {
      id: 1,
      name: 'Qırmızı Qızılgüllər',
      price: 45,
      emoji: '🌹',
      description: 'Klassik romantik buket - 11 ədəd təzə qırmızı qızılgül',
      category: 'Qızılgüllər',
      color: 'from-red-100 to-red-200'
    },
    {
      id: 2,
      name: 'Çəhrayı Qızılgüllər',
      price: 40,
      emoji: '🌹',
      description: 'Zərif çəhrayı qızılgüllər - 15 ədəd',
      category: 'Qızılgüllər',
      color: 'from-pink-100 to-pink-200'
    },
    {
      id: 3,
      name: 'Ağ Qızılgüllər',
      price: 50,
      emoji: '🤍',
      description: 'Təmiz və zərif ağ qızılgüllər - 11 ədəd',
      category: 'Qızılgüllər',
      color: 'from-gray-100 to-gray-200'
    },
    {
      id: 4,
      name: 'Çəhrayı Lalələr',
      price: 35,
      emoji: '🌷',
      description: 'Bahar təravəti - 21 ədəd təzə lalə',
      category: 'Lalələr',
      color: 'from-pink-100 to-pink-200'
    },
    {
      id: 5,
      name: 'Qırmızı Lalələr',
      price: 35,
      emoji: '🌷',
      description: 'Parlaq qırmızı lalələr - 21 ədəd',
      category: 'Lalələr',
      color: 'from-red-100 to-red-200'
    },
    {
      id: 6,
      name: 'Sarı Lalələr',
      price: 35,
      emoji: '🌷',
      description: 'Günəşli sarı lalələr - 21 ədəd',
      category: 'Lalələr',
      color: 'from-yellow-100 to-yellow-200'
    },
    {
      id: 7,
      name: 'Ağ Orkideyalar',
      price: 65,
      emoji: '🌺',
      description: 'Zərif və nəfis orkideya - premium keyfiyyət',
      category: 'Orkideyalar',
      color: 'from-blue-100 to-blue-200'
    },
    {
      id: 8,
      name: 'Bənövşəyi Orkideyalar',
      price: 70,
      emoji: '🌺',
      description: 'Ekzotik bənövşəyi orkideya - xüsusi növ',
      category: 'Orkideyalar',
      color: 'from-purple-100 to-purple-200'
    },
    {
      id: 9,
      name: 'Qarışıq Buket',
      price: 55,
      emoji: '💐',
      description: 'Rəngarəng gül kompozisiyası - müxtəlif növlər',
      category: 'Buketlər',
      color: 'from-purple-100 to-purple-200'
    },
    {
      id: 10,
      name: 'Günəbaxan Buketi',
      price: 40,
      emoji: '🌻',
      description: 'Şən və parlaq günəbaxan buketi - 7 ədəd',
      category: 'Buketlər',
      color: 'from-yellow-100 to-yellow-200'
    },
    {
      id: 11,
      name: 'Bahar Buketi',
      price: 48,
      emoji: '🌸',
      description: 'Müxtəlif bahar güllərindən ibarət buket',
      category: 'Buketlər',
      color: 'from-pink-100 to-pink-200'
    },
    {
      id: 12,
      name: 'Romantik Buket',
      price: 60,
      emoji: '💕',
      description: 'Qırmızı və çəhrayı qızılgüllərdən romantik buket',
      category: 'Buketlər',
      color: 'from-red-100 to-pink-200'
    },
    {
      id: 13,
      name: 'Toy Buketi - Klassik',
      price: 120,
      emoji: '💒',
      description: 'Ağ qızılgül və orkideyadan klassik gəlin buketi',
      category: 'Toy Güllər',
      color: 'from-pink-100 to-pink-300'
    },
    {
      id: 14,
      name: 'Toy Buketi - Premium',
      price: 150,
      emoji: '👰',
      description: 'Ekzotik güllərdən lüks gəlin buketi',
      category: 'Toy Güllər',
      color: 'from-purple-100 to-purple-300'
    },
    {
      id: 15,
      name: 'Toy Bəzəyi Paketi',
      price: 300,
      emoji: '🎊',
      description: 'Toy zalı üçün tam çiçək bəzəyi paketi',
      category: 'Toy Güllər',
      color: 'from-pink-100 to-pink-300'
    },
    {
      id: 16,
      name: 'Kənar Lalələr',
      price: 38,
      emoji: '🌷',
      description: 'Hollandiya lalələri - premium keyfiyyət',
      category: 'Lalələr',
      color: 'from-orange-100 to-orange-200'
    },
    {
      id: 17,
      name: 'Mini Qızılgül Buketi',
      price: 30,
      emoji: '🌹',
      description: 'Kiçik və sevimli qızılgül buketi - 7 ədəd',
      category: 'Qızılgüllər',
      color: 'from-pink-100 to-pink-200'
    },
    {
      id: 18,
      name: 'Lüks Qızılgül Buketi',
      price: 85,
      emoji: '🌹',
      description: 'Premium qırmızı qızılgüllər - 25 ədəd',
      category: 'Qızılgüllər',
      color: 'from-red-100 to-red-300'
    }
  ]

  const filteredProducts = selectedCategory === 'Hamısı' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Gül Kataloqu
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Geniş çeşiddə təzə güllər və buketlər
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${product.color} p-12 flex items-center justify-center`}>
                <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{product.price} AZN</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalog
