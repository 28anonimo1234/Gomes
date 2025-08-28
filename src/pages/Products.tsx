
import React, { useState } from 'react'
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart } from 'lucide-react'

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')
  const [filterCategory, setFilterCategory] = useState('all')

  // Produtos de exemplo
  const products = [
    {
      id: 1,
      name: "Processador AMD Ryzen 7 5800X",
      price: "R$ 1.299,90",
      originalPrice: "R$ 1.599,90",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=300",
      rating: 4.8,
      category: "processadores",
      brand: "AMD"
    },
    {
      id: 2,
      name: "Placa de Vídeo RTX 4060 Ti",
      price: "R$ 2.499,90",
      originalPrice: "R$ 2.899,90",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=300",
      rating: 4.9,
      category: "placas-video",
      brand: "NVIDIA"
    },
    {
      id: 3,
      name: "Memória RAM 32GB DDR4",
      price: "R$ 899,90",
      originalPrice: "R$ 1.199,90",
      image: "https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?w=300",
      rating: 4.7,
      category: "memorias",
      brand: "Corsair"
    },
    {
      id: 4,
      name: "SSD NVMe 1TB Samsung",
      price: "R$ 549,90",
      originalPrice: "R$ 699,90",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=300",
      rating: 4.8,
      category: "armazenamento",
      brand: "Samsung"
    },
    {
      id: 5,
      name: "Teclado Mecânico RGB",
      price: "R$ 299,90",
      originalPrice: "R$ 399,90",
      image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?w=300",
      rating: 4.6,
      category: "teclados",
      brand: "Logitech"
    },
    {
      id: 6,
      name: "Mouse Gamer 16000 DPI",
      price: "R$ 199,90",
      originalPrice: "R$ 299,90",
      image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?w=300",
      rating: 4.5,
      category: "mouses",
      brand: "Razer"
    }
  ]

  const categories = [
    { value: 'all', label: 'Todas as Categorias' },
    { value: 'processadores', label: 'Processadores' },
    { value: 'placas-video', label: 'Placas de Vídeo' },
    { value: 'memorias', label: 'Memórias RAM' },
    { value: 'armazenamento', label: 'Armazenamento' },
    { value: 'teclados', label: 'Teclados' },
    { value: 'mouses', label: 'Mouses' }
  ]

  const filteredProducts = products.filter(product => 
    filterCategory === 'all' || product.category === filterCategory
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da página */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produtos</h1>
          
          {/* Barra de busca e filtros */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Filtro por categoria */}
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              
              {/* Ordenação */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Nome</option>
                <option value="price">Menor Preço</option>
                <option value="rating">Avaliação</option>
              </select>
              
              {/* Modo de visualização */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de produtos */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-4 text-gray-600">
          Mostrando {filteredProducts.length} produtos
        </div>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                  </button>
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    -19%
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
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
                      {product.rating}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">
                      ou 12x de R$ {(parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')) / 12).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Adicionar ao Carrinho</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow border border-gray-100 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
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
                        {product.rating}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">
                            {product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                        <span className="text-sm text-green-600 font-medium">
                          ou 12x de R$ {(parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')) / 12).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="h-5 w-5" />
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Adicionar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
