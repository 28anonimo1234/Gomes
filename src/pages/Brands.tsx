
import React, { useState } from 'react'
import { Search, Star, ShoppingCart, Filter, Building2, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Brands: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const categories = [
    { id: 'todos', name: 'Todas as Categorias' },
    { id: 'processadores', name: 'Processadores' },
    { id: 'placas-video', name: 'Placas de Vídeo' },
    { id: 'memorias', name: 'Memórias' },
    { id: 'armazenamento', name: 'Armazenamento' },
    { id: 'perifericos', name: 'Periféricos' },
    { id: 'monitores', name: 'Monitores' }
  ]

  const brands = [
    {
      id: 'intel',
      name: 'Intel',
      logo: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      category: 'processadores',
      description: 'Líder mundial em processadores e tecnologias de computação',
      products: 156,
      rating: 4.8,
      isPartner: true,
      founded: 1968,
      country: 'Estados Unidos'
    },
    {
      id: 'amd',
      name: 'AMD',
      logo: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      category: 'processadores',
      description: 'Inovação em processadores e placas gráficas de alto desempenho',
      products: 142,
      rating: 4.7,
      isPartner: true,
      founded: 1969,
      country: 'Estados Unidos'
    },
    {
      id: 'nvidia',
      name: 'NVIDIA',
      logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      category: 'placas-video',
      description: 'Pioneira em GPU e tecnologias de inteligência artificial',
      products: 89,
      rating: 4.9,
      isPartner: true,
      founded: 1993,
      country: 'Estados Unidos'
    },
    {
      id: 'corsair',
      name: 'Corsair',
      logo: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg',
      category: 'memorias',
      description: 'Especialista em memórias, periféricos e componentes gaming',
      products: 234,
      rating: 4.6,
      isPartner: true,
      founded: 1994,
      country: 'Estados Unidos'
    },
    {
      id: 'kingston',
      name: 'Kingston',
      logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      category: 'armazenamento',
      description: 'Líder mundial em soluções de memória e armazenamento',
      products: 178,
      rating: 4.5,
      isPartner: false,
      founded: 1987,
      country: 'Estados Unidos'
    },
    {
      id: 'logitech',
      name: 'Logitech',
      logo: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      category: 'perifericos',
      description: 'Inovação em periféricos e dispositivos de entrada',
      products: 312,
      rating: 4.7,
      isPartner: true,
      founded: 1981,
      country: 'Suíça'
    },
    {
      id: 'asus',
      name: 'ASUS',
      logo: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      category: 'monitores',
      description: 'Tecnologia de ponta em placas-mãe, laptops e monitores',
      products: 267,
      rating: 4.6,
      isPartner: true,
      founded: 1989,
      country: 'Taiwan'
    },
    {
      id: 'samsung',
      name: 'Samsung',
      logo: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      category: 'monitores',
      description: 'Líder em displays, monitores e tecnologia de memória',
      products: 198,
      rating: 4.8,
      isPartner: true,
      founded: 1938,
      country: 'Coreia do Sul'
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Intel Core i7-13700K',
      brand: 'Intel',
      price: 2199.90,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      rating: 4.8,
      reviews: 456
    },
    {
      id: 2,
      name: 'AMD Ryzen 9 7900X',
      brand: 'AMD',
      price: 2899.90,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      rating: 4.9,
      reviews: 234
    },
    {
      id: 3,
      name: 'RTX 4080 Super',
      brand: 'NVIDIA',
      price: 4299.90,
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      rating: 4.8,
      reviews: 178
    },
    {
      id: 4,
      name: 'Corsair Vengeance RGB Pro',
      brand: 'Corsair',
      price: 599.90,
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg',
      rating: 4.7,
      reviews: 892
    }
  ]

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'todos' || brand.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const selectedBrandData = selectedBrand ? brands.find(b => b.id === selectedBrand) : null
  const brandProducts = selectedBrandData ? 
    featuredProducts.filter(p => p.brand === selectedBrandData.name) : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center mb-4"
            >
              <Building2 className="h-8 w-8 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">Marcas</h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Conheça as melhores marcas de tecnologia do mundo
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block"
            >
              <Award className="h-6 w-6 inline mr-2" />
              <span className="text-lg font-semibold">Parceiros Oficiais Certificados</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar marcas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
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

        {/* Brands Grid */}
        {!selectedBrand ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedBrand(brand.id)}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {brand.isPartner && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      PARCEIRO
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{brand.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {brand.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Produtos:</span>
                      <span className="font-medium">{brand.products}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fundada:</span>
                      <span className="font-medium">{brand.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>País:</span>
                      <span className="font-medium">{brand.country}</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Ver Produtos
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Brand Detail View */
          <div>
            <button
              onClick={() => setSelectedBrand(null)}
              className="mb-6 text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Voltar às marcas
            </button>

            {selectedBrandData && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
                  <div className="flex items-center space-x-6">
                    <img
                      src={selectedBrandData.logo}
                      alt={selectedBrandData.name}
                      className="w-24 h-24 object-cover rounded-lg bg-white p-2"
                    />
                    <div>
                      <h1 className="text-4xl font-bold mb-2">{selectedBrandData.name}</h1>
                      <p className="text-xl text-purple-100 mb-4">{selectedBrandData.description}</p>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span>{selectedBrandData.rating} estrelas</span>
                        </div>
                        <div>{selectedBrandData.products} produtos</div>
                        <div>Fundada em {selectedBrandData.founded}</div>
                        {selectedBrandData.isPartner && (
                          <div className="bg-green-500 px-2 py-1 rounded text-xs font-bold">
                            PARCEIRO OFICIAL
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Brand Products */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Produtos {selectedBrandData?.name}
              </h2>
              
              {brandProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brandProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center mb-3">
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
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        <div className="text-2xl font-bold text-gray-900 mb-4">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </div>

                        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Adicionar ao Carrinho</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Building2 className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Produtos em breve
                  </h3>
                  <p className="text-gray-600">
                    Estamos trabalhando para trazer mais produtos desta marca
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Featured Brands Section */}
      {!selectedBrand && (
        <div className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Marcas em Destaque</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brands.filter(b => b.isPartner).slice(0, 4).map((brand) => (
                <div key={brand.id} className="text-center">
                  <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold">{brand.name}</h3>
                  <p className="text-sm text-gray-400">{brand.products} produtos</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Brands
