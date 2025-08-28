
import React, { useState } from 'react'
import { TrendingUp, Star, ShoppingCart, Heart, Trophy, Medal, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const BestSellers: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const periods = [
    { id: 'week', name: 'Esta Semana' },
    { id: 'month', name: 'Este Mês' },
    { id: 'year', name: 'Este Ano' },
    { id: 'all', name: 'Todos os Tempos' }
  ]

  const categories = [
    { id: 'todos', name: 'Todas as Categorias' },
    { id: 'processadores', name: 'Processadores' },
    { id: 'placas-video', name: 'Placas de Vídeo' },
    { id: 'memorias', name: 'Memórias' },
    { id: 'armazenamento', name: 'Armazenamento' },
    { id: 'perifericos', name: 'Periféricos' }
  ]

  const bestSellers = [
    {
      id: 1,
      rank: 1,
      name: 'AMD Ryzen 5 7600X',
      price: 1299.90,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      rating: 4.8,
      reviews: 1247,
      category: 'processadores',
      unitsSold: 2847,
      salesGrowth: 23,
      description: 'Processador AMD Ryzen 5 7600X - 6 núcleos, 12 threads'
    },
    {
      id: 2,
      rank: 2,
      name: 'RTX 4060 Ti 16GB',
      price: 2299.90,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      rating: 4.7,
      reviews: 892,
      category: 'placas-video',
      unitsSold: 1956,
      salesGrowth: 18,
      description: 'Placa de vídeo NVIDIA RTX 4060 Ti com 16GB GDDR6'
    },
    {
      id: 3,
      rank: 3,
      name: 'Corsair Vengeance LPX 16GB',
      price: 399.90,
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg',
      rating: 4.9,
      reviews: 2156,
      category: 'memorias',
      unitsSold: 3421,
      salesGrowth: 31,
      description: 'Kit de memória DDR4 16GB (2x8GB) 3200MHz'
    },
    {
      id: 4,
      rank: 4,
      name: 'SSD Kingston NV2 1TB',
      price: 299.90,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      rating: 4.6,
      reviews: 1834,
      category: 'armazenamento',
      unitsSold: 4127,
      salesGrowth: 45,
      description: 'SSD NVMe M.2 1TB PCIe 4.0 - Leitura até 3500MB/s'
    },
    {
      id: 5,
      rank: 5,
      name: 'Logitech G Pro X',
      price: 649.90,
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      rating: 4.5,
      reviews: 967,
      category: 'perifericos',
      unitsSold: 1523,
      salesGrowth: 12,
      description: 'Teclado mecânico gamer com switches GX Blue'
    },
    {
      id: 6,
      rank: 6,
      name: 'Intel Core i5-13400F',
      price: 999.90,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      rating: 4.7,
      reviews: 743,
      category: 'processadores',
      unitsSold: 1789,
      salesGrowth: 27,
      description: 'Processador Intel Core i5 13ª geração - 10 núcleos'
    },
    {
      id: 7,
      rank: 7,
      name: 'Mouse Logitech G502 Hero',
      price: 249.90,
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      rating: 4.8,
      reviews: 1456,
      category: 'perifericos',
      unitsSold: 2234,
      salesGrowth: 19,
      description: 'Mouse gamer com sensor HERO 25K e 11 botões programáveis'
    },
    {
      id: 8,
      rank: 8,
      name: 'RTX 4070 Gaming OC',
      price: 2899.90,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      rating: 4.9,
      reviews: 567,
      category: 'placas-video',
      unitsSold: 1345,
      salesGrowth: 34,
      description: 'Placa de vídeo NVIDIA RTX 4070 com overclock de fábrica'
    }
  ]

  const filteredProducts = bestSellers.filter(product => 
    selectedCategory === 'todos' || product.category === selectedCategory
  )

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2: return <Medal className="h-6 w-6 text-gray-400" />
      case 3: return <Award className="h-6 w-6 text-amber-600" />
      default: return <span className="text-lg font-bold text-gray-600">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500'
      case 3: return 'bg-gradient-to-r from-amber-400 to-amber-600'
      default: return 'bg-gradient-to-r from-blue-500 to-blue-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-4"
            >
              <TrendingUp className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Mais Vendidos</h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Os produtos mais populares escolhidos pelos nossos clientes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block"
            >
              <Trophy className="h-6 w-6 inline mr-2" />
              <span className="text-lg font-semibold">Ranking Atualizado Diariamente</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Period Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Período
              </label>
              <div className="flex flex-wrap gap-2">
                {periods.map((period) => (
                  <button
                    key={period.id}
                    onClick={() => setSelectedPeriod(period.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPeriod === period.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {period.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">🏆 Top 3 Mais Vendidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {filteredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative bg-white rounded-lg shadow-xl overflow-hidden ${
                  product.rank === 1 ? 'transform scale-105' : ''
                }`}
              >
                {/* Rank Badge */}
                <div className={`absolute top-0 left-0 right-0 ${getRankBadgeColor(product.rank)} text-white py-3`}>
                  <div className="flex items-center justify-center space-x-2">
                    {getRankIcon(product.rank)}
                    <span className="font-bold text-lg">
                      {product.rank === 1 ? 'CAMPEÃO' : 
                       product.rank === 2 ? 'VICE-CAMPEÃO' : '3º LUGAR'}
                    </span>
                  </div>
                </div>

                <div className="pt-16 p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      {product.unitsSold.toLocaleString()} vendidos
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all">
                      Comprar Agora
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Complete Ranking */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">Ranking Completo</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-6">
                  {/* Rank */}
                  <div className="flex-shrink-0 w-16 text-center">
                    {getRankIcon(product.rank)}
                  </div>

                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="text-green-600 font-medium">
                        +{product.salesGrowth}% vendas
                      </div>
                    </div>
                  </div>

                  {/* Sales Stats */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-sm text-gray-500 mb-1">Vendidos</div>
                    <div className="text-lg font-bold text-gray-900">
                      {product.unitsSold.toLocaleString()}
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="flex-shrink-0 text-right">
                    <div className="text-2xl font-bold text-gray-900 mb-3">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Comprar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-gray-300">Produtos Vendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfação dos Clientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">24h</div>
              <div className="text-gray-300">Entrega Rápida</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2 Anos</div>
              <div className="text-gray-300">Garantia Estendida</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellers
