
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, ShoppingCart, Heart, Truck, Shield, CreditCard, Plus, Minus } from 'lucide-react'

const ProductDetail: React.FC = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Produto de exemplo (normalmente viria de uma API)
  const product = {
    id: 1,
    name: "Processador AMD Ryzen 7 5800X",
    price: "R$ 1.299,90",
    originalPrice: "R$ 1.599,90",
    images: [
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=600",
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?w=600",
      "https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?w=600"
    ],
    rating: 4.8,
    reviewCount: 156,
    description: "O processador AMD Ryzen 7 5800X oferece desempenho excepcional para gaming e produtividade. Com 8 núcleos e 16 threads, é ideal para multitarefas intensivas e jogos modernos.",
    specifications: {
      "Núcleos": "8",
      "Threads": "16",
      "Frequência Base": "3.8 GHz",
      "Frequência Boost": "4.7 GHz",
      "Cache L3": "32 MB",
      "Socket": "AM4",
      "TDP": "105W",
      "Arquitetura": "Zen 3"
    },
    inStock: true,
    stockQuantity: 25
  }

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < product.stockQuantity) {
      setQuantity(quantity + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>›</li>
            <li><a href="/products" className="hover:text-blue-600">Produtos</a></li>
            <li>›</li>
            <li className="text-gray-900">Processadores</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} avaliações)
                </span>
              </div>
            </div>

            {/* Preço */}
            <div className="border-b pb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                  -19%
                </span>
              </div>
              <p className="text-green-600 font-medium">
                ou 12x de R$ {(parseFloat(product.price.replace('R$ ', '').replace('.', '').replace(',', '.')) / 12).toFixed(2).replace('.', ',')} sem juros
              </p>
            </div>

            {/* Quantidade e Compra */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantidade:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-2 hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="p-2 hover:bg-gray-50"
                    disabled={quantity >= product.stockQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stockQuantity} disponíveis
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
                
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                  Comprar Agora
                </button>
                
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Vantagens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-5 w-5 text-green-600" />
                <span>Frete grátis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>3 anos de garantia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CreditCard className="h-5 w-5 text-purple-600" />
                <span>12x sem juros</span>
              </div>
            </div>
          </div>
        </div>

        {/* Abas de Informações */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button className="py-4 border-b-2 border-blue-500 text-blue-600 font-medium">
                Descrição
              </button>
              <button className="py-4 text-gray-500 hover:text-gray-700">
                Especificações
              </button>
              <button className="py-4 text-gray-500 hover:text-gray-700">
                Avaliações
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {/* Descrição */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Descrição do Produto</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              
              <h4 className="text-lg font-semibold mt-6">Especificações Técnicas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
