
import React, { useState, useEffect } from 'react'
import { Clock, Star, ShoppingCart, Heart, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

const DailyDeals: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const deals = [
    {
      id: 1,
      name: 'RTX 4070 Super Gaming',
      originalPrice: 3299.90,
      dealPrice: 2599.90,
      discount: 21,
      image: 'https://static.gigabyte.com/StaticFile/Image/Global/f1aaf12e3989f2d5a36bd44993b662f5/Product/39148/Png',
      rating: 4.8,
      reviews: 245,
      stock: 15,
      category: 'Placas de Vídeo'
    },
    {
      id: 2,
      name: 'Processador AMD Ryzen 7 7700X',
      originalPrice: 1899.90,
      dealPrice: 1399.90,
      discount: 26,
      image: 'https://cdn.awsli.com.br/1882/1882647/produto/219601523/qa-epuykuo05n.jpg',
      rating: 4.9,
      reviews: 189,
      stock: 8,
      category: 'Processadores'
    },
    {
      id: 3,
      name: 'Memória DDR5 32GB Kit',
      originalPrice: 899.90,
      dealPrice: 649.90,
      discount: 28,
      image: 'https://img.terabyteshop.com.br/produto/g/memoria-ddr5-kingston-fury-beast-rgb-32gb-2x16gb-5600mhz-white-kf556c36bweak2-32_169365.jpg',
      rating: 4.7,
      reviews: 156,
      stock: 23,
      category: 'Memórias'
    },
    {
      id: 4,
      name: 'SSD NVMe 1TB PCIe 4.0',
      originalPrice: 549.90,
      dealPrice: 399.90,
      discount: 27,
      image: 'https://i.zst.com.br/thumbs/12/8/35/-1421480626.jpg',
      rating: 4.6,
      reviews: 298,
      stock: 31,
      category: 'Armazenamento'
    },
    {
      id: 5,
      name: 'Teclado Mecânico RGB',
      originalPrice: 349.90,
      dealPrice: 249.90,
      discount: 29,
      image: 'https://m.media-amazon.com/images/I/61uvu1QeLKL._UF1000,1000_QL80_.jpg',
      rating: 4.5,
      reviews: 412,
      stock: 47,
      category: 'Periféricos'
    },
    {
      id: 6,
      name: 'Monitor 27" 144Hz QHD',
      originalPrice: 1299.90,
      dealPrice: 899.90,
      discount: 31,
      image: 'https://m.media-amazon.com/images/I/810G-mew4DL.jpg',
      rating: 4.8,
      reviews: 167,
      stock: 12,
      category: 'Monitores'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Ofertas do Dia
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Descontos imperdíveis por tempo limitado!
            </motion.p>
            
            {/* Countdown Timer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center items-center space-x-4 mb-8"
            >
              <Clock className="h-8 w-8" />
              <div className="flex space-x-2 text-2xl font-bold">
                <div className="bg-white text-red-600 px-3 py-2 rounded">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span>:</span>
                <div className="bg-white text-red-600 px-3 py-2 rounded">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span>:</span>
                <div className="bg-white text-red-600 px-3 py-2 rounded">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
            
            <p className="text-lg opacity-90">
              Ofertas válidas até o final do dia ou enquanto durarem os estoques
            </p>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Deal Badge */}
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                  -{deal.discount}%
                </div>
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm">
                  <Tag className="h-4 w-4 inline mr-1" />
                  OFERTA
                </div>
                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{deal.category}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {deal.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {deal.rating} ({deal.reviews} avaliações)
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">
                      R$ {deal.dealPrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 line-through">
                      R$ {deal.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Economize R$ {(deal.originalPrice - deal.dealPrice).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {/* Stock Warning */}
                {deal.stock <= 20 && (
                  <div className="mb-4 text-sm text-orange-600 font-medium">
                    ⚠️ Apenas {deal.stock} unidades restantes!
                  </div>
                )}

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Aproveitar Oferta</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Não Perca as Próximas Ofertas!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Cadastre-se em nossa newsletter e seja o primeiro a saber sobre as melhores promoções
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyDeals
