
import React from 'react'
import { Monitor, Cpu, HardDrive, Keyboard, Star, ShoppingCart, Heart } from 'lucide-react'

const Home: React.FC = () => {
  // Produtos em destaque (dados temporários)
  const featuredProducts = [
    {
      id: 1,
      name: "Processador AMD Ryzen 7 5800X",
      price: "R$ 1.299,90",
      originalPrice: "R$ 1.599,90",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=300",
      rating: 4.8
    },
    {
      id: 2,
      name: "Placa de Vídeo RTX 4060 Ti",
      price: "R$ 2.499,90",
      originalPrice: "R$ 2.899,90",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=300",
      rating: 4.9
    },
    {
      id: 3,
      name: "Memória RAM 32GB DDR4",
      price: "R$ 899,90",
      originalPrice: "R$ 1.199,90",
      image: "https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?w=300",
      rating: 4.7
    },
    {
      id: 4,
      name: "SSD NVMe 1TB Samsung",
      price: "R$ 549,90",
      originalPrice: "R$ 699,90",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=300",
      rating: 4.8
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Os Melhores 
                <span className="text-blue-300 block">Componentes</span>
                para seu PC
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Processadores, placas de vídeo, memórias e muito mais. 
                Monte o PC dos seus sonhos com os melhores preços do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Ver Ofertas
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Monte seu PC
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                    <Cpu className="h-8 w-8 mb-2 text-blue-300" />
                    <span className="text-sm">Processadores</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                    <Monitor className="h-8 w-8 mb-2 text-green-300" />
                    <span className="text-sm">Placas de Vídeo</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                    <HardDrive className="h-8 w-8 mb-2 text-purple-300" />
                    <span className="text-sm">Armazenamento</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                    <Keyboard className="h-8 w-8 mb-2 text-orange-300" />
                    <span className="text-sm">Periféricos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Os componentes mais procurados com os melhores preços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* Banner de Vantagens */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frete Grátis
              </h3>
              <p className="text-gray-600">
                Para compras acima de R$ 299 em todo o Brasil
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Garantia Estendida
              </h3>
              <p className="text-gray-600">
                Até 3 anos de garantia em produtos selecionados
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Suporte Técnico
              </h3>
              <p className="text-gray-600">
                Equipe especializada para tirar suas dúvidas
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
