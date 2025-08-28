
import React, { useState } from 'react'
import { User, Package, Heart, Settings, MapPin, CreditCard, Bell, Shield, ChevronRight, Edit3, Camera, Star, Truck, CheckCircle, Clock, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)

  const menuItems = [
    { id: 'profile', label: 'Meu Perfil', icon: User, color: 'text-blue-600' },
    { id: 'orders', label: 'Meus Pedidos', icon: Package, color: 'text-green-600' },
    { id: 'favorites', label: 'Favoritos', icon: Heart, color: 'text-red-600' },
    { id: 'addresses', label: 'Endereços', icon: MapPin, color: 'text-purple-600' },
    { id: 'payments', label: 'Pagamentos', icon: CreditCard, color: 'text-yellow-600' },
    { id: 'notifications', label: 'Notificações', icon: Bell, color: 'text-indigo-600' },
    { id: 'security', label: 'Segurança', icon: Shield, color: 'text-gray-600' },
    { id: 'settings', label: 'Configurações', icon: Settings, color: 'text-gray-600' }
  ]

  const orders = [
    {
      id: '001234',
      date: '15/01/2025',
      status: 'delivered',
      statusText: 'Entregue',
      total: 1299.90,
      items: 2,
      trackingCode: 'BR123456789',
      products: [
        { name: 'AMD Ryzen 5 7600X', quantity: 1, price: 899.90 },
        { name: 'Corsair Vengeance 16GB', quantity: 1, price: 399.90 }
      ]
    },
    {
      id: '001235',
      date: '10/01/2025',
      status: 'shipped',
      statusText: 'Em transporte',
      total: 2499.90,
      items: 1,
      trackingCode: 'BR987654321',
      products: [
        { name: 'RTX 4070 Gaming OC', quantity: 1, price: 2499.90 }
      ]
    },
    {
      id: '001236',
      date: '05/01/2025',
      status: 'processing',
      statusText: 'Processando',
      total: 899.90,
      items: 3,
      trackingCode: null,
      products: [
        { name: 'SSD Kingston 1TB', quantity: 1, price: 299.90 },
        { name: 'Mouse Logitech G502', quantity: 1, price: 249.90 },
        { name: 'Mousepad Gamer', quantity: 1, price: 49.90 }
      ]
    }
  ]

  const favorites = [
    {
      id: 1,
      name: 'Intel Core i7-13700K',
      price: 2199.90,
      originalPrice: 2499.90,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Monitor ASUS 27" 144Hz',
      price: 1299.90,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      rating: 4.7,
      inStock: true
    },
    {
      id: 3,
      name: 'Teclado Mecânico RGB',
      price: 349.90,
      originalPrice: 449.90,
      image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
      rating: 4.5,
      inStock: false
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'shipped': return <Truck className="h-5 w-5 text-blue-500" />
      case 'processing': return <Clock className="h-5 w-5 text-yellow-500" />
      default: return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'processing': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Meu Perfil</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Edit3 className="h-4 w-4" />
                <span>{isEditing ? 'Cancelar' : 'Editar'}</span>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              {/* Profile Header */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    JS
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                      <Camera className="h-4 w-4 text-gray-600" />
                    </button>
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">João Silva</h3>
                  <p className="text-gray-600">joao.silva@email.com</p>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">Cliente VIP</span>
                  </div>
                </div>
              </div>
              
              {/* Profile Form */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    defaultValue="João Silva"
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="joao.silva@email.com"
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    defaultValue="(11) 99999-9999"
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data de Nascimento
                  </label>
                  <input
                    type="date"
                    defaultValue="1990-01-01"
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    defaultValue="123.456.789-00"
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gênero
                  </label>
                  <select
                    defaultValue="masculino"
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-blue-500' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                    <option value="nao-informar">Prefiro não informar</option>
                  </select>
                </div>
                
                {isEditing && (
                  <div className="md:col-span-2 flex space-x-4">
                    <button 
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Salvar Alterações
                    </button>
                    <button 
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-gray-600">Pedidos Realizados</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-gray-600">Produtos Favoritos</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-600">Avaliação Média</div>
              </div>
            </div>
          </motion.div>
        )
        
      case 'orders':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Meus Pedidos</h2>
            
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-semibold text-lg">Pedido #{order.id}</h3>
                        <p className="text-gray-600 text-sm">Realizado em {order.date}</p>
                      </div>
                      {getStatusIcon(order.status)}
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.statusText}
                      </span>
                      {order.trackingCode && (
                        <p className="text-sm text-gray-600 mt-1">
                          Código: {order.trackingCode}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Products List */}
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-3">Produtos ({order.items} item{order.items > 1 ? 's' : ''})</h4>
                    <div className="space-y-2">
                      {order.products.map((product, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">
                            {product.quantity}x {product.name}
                          </span>
                          <span className="font-medium">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        R$ {order.total.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      {order.status === 'shipped' && (
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
                          Rastrear Pedido
                        </button>
                      )}
                      {order.status === 'delivered' && (
                        <button className="text-green-600 hover:text-green-700 font-medium">
                          Avaliar Produtos
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-700 font-medium flex items-center">
                        Ver Detalhes
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )
        
      case 'favorites':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Meus Favoritos</h2>
              <span className="text-gray-600">{favorites.length} produto{favorites.length !== 1 ? 's' : ''}</span>
            </div>
            
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden group">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                        <X className="h-4 w-4 text-gray-600" />
                      </button>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Fora de Estoque
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
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
                        <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-gray-900">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="text-sm text-green-600 font-medium">
                            Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                          </span>
                        )}
                      </div>
                      
                      <button 
                        disabled={!product.inStock}
                        className={`w-full py-2 rounded-lg font-medium transition-colors ${
                          product.inStock
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum produto favoritado
                </h3>
                <p className="text-gray-600 mb-6">
                  Adicione produtos aos seus favoritos para vê-los aqui
                </p>
                <a
                  href="/products"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
                >
                  Explorar Produtos
                </a>
              </div>
            )}
          </motion.div>
        )
        
      default:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h2>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <div className="max-w-md mx-auto">
                <Settings className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Seção em Desenvolvimento
                </h3>
                <p className="text-gray-600">
                  Esta funcionalidade estará disponível em breve. Estamos trabalhando para oferecer a melhor experiência possível.
                </p>
              </div>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Minha Conta</h1>
          <p className="text-gray-600">Gerencie suas informações, pedidos e preferências</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden sticky top-8">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-lg font-bold">
                    JS
                  </div>
                  <div>
                    <div className="font-semibold">João Silva</div>
                    <div className="text-sm opacity-90">Cliente VIP</div>
                  </div>
                </div>
              </div>
              
              <nav className="space-y-1 p-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all ${
                        activeTab === item.id
                          ? 'bg-blue-50 border-r-4 border-blue-500 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${activeTab === item.id ? item.color : 'text-gray-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
