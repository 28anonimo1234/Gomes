
import React, { useState } from 'react'
import { Calendar, Star, ShoppingCart, Heart, Filter, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const NewReleases: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [sortBy, setSortBy] = useState('newest')

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'processadores', name: 'Processadores' },
    { id: 'placas-video', name: 'Placas de Vídeo' },
    { id: 'memorias', name: 'Memórias' },
    { id: 'armazenamento', name: 'Armazenamento' },
    { id: 'perifericos', name: 'Periféricos' },
    { id: 'monitores', name: 'Monitores' }
  ]

  const products = [
    {
      id: 1,
      name: 'Intel Core i9-14900K',
      price: 2899.90,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      rating: 4.9,
      reviews: 47,
      category: 'processadores',
      releaseDate: '2025-01-15',
      isNew: true,
      badge: 'NOVO',
      description: 'Processador Intel de 14ª geração com 24 núcleos'
    },
    {
      id: 2,
      name: 'RTX 4080 Super',
      price: 4299.90,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      rating: 4.8,
      reviews: 23,
      category: 'placas-video',
      releaseDate: '2025-01-12',
      isNew: true,
      badge: 'LANÇAMENTO',
      description: 'Placa de vídeo RTX 4080 Super com 16GB GDDR6X'
    },
    {
      id: 3,
      name: 'DDR5-6000 RGB 32GB',
      price: 1299.90,
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg',
      rating: 4.7,
      reviews: 89,
      category: 'memorias',
      releaseDate: '2025-01-10',
      isNew: true,
      badge: 'NOVO',
      description: 'Kit de memória DDR5 32GB com iluminação RGB'
    },
    {
      id: 4,
      name: 'SSD PCIe 5.0 2TB',
      price: 1599.90,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      rating: 4.6,
      reviews: 34,
      category: 'armazenamento',
      releaseDate: '2025-01-08',
      isNew: true,
      badge: 'EXCLUSIVO',
      description: 'SSD NVMe PCIe 5.0 com velocidade de até 12GB/s'
    },
    {
      id: 5,
      name: 'Monitor OLED 32" 4K 240Hz',
      price: 3999.90,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      rating: 5.0,
      reviews: 12,
      category: 'monitores',
      releaseDate: '2025-01-05',
      isNew: true,
      badge: 'PREMIUM',
      description: 'Monitor OLED 32" 4K com 240Hz e HDR1000'
    },
    {
      id: 6,
      name: 'Teclado Wireless Low Profile',
      price: 799.90,
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      rating: 4.5,
      reviews: 156,
      category: 'perifericos',
      releaseDate: '2025-01-03',
      isNew: true,
      badge: 'INOVAÇÃO',
      description: 'Teclado mecânico wireless com perfil baixo'
    }
  ]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'todos' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'NOVO': return 'bg-green-500'
      case 'LANÇAMENTO': return 'bg-blue-500'
      case 'EXCLUSIVO': return 'bg-purple-500'
      case 'PREMIUM': return 'bg-yellow-500'
      case 'INOVAÇÃO': return 'bg-pink-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-4"
            >
              <Sparkles className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Lançamentos</h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Descubra as mais recentes inovações em tecnologia
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block"
            >
              <Calendar className="h-6 w-6 inline mr-2" />
              <span className="text-lg font-semibold">Janeiro 2025 - Novos Produtos</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Filter className="h-4 w-4 inline mr-2" />
                Filtrar por Categoria
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div className="lg:w-64">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Mais Recentes</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="rating">Melhor Avaliados</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                  {product.badge}
                </div>
                
                {/* New Indicator */}
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                    NOVO
                  </div>
                )}

                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  Lançado em {new Date(product.releaseDate).toLocaleDateString('pt-BR')}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
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
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <Sparkles className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600">
              Tente alterar os filtros ou aguarde novos lançamentos
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Seja o Primeiro a Saber!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Receba notificações sobre os próximos lançamentos e pré-vendas exclusivas
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Notificar-me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewReleases
