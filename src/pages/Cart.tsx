
import React, { useState } from 'react'
import { Trash2, Plus, Minus, ShoppingCart, CreditCard, Truck } from 'lucide-react'

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Processador AMD Ryzen 7 5800X",
      price: 1299.90,
      quantity: 1,
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=300"
    },
    {
      id: 2,
      name: "Placa de Vídeo RTX 4060 Ti",
      price: 2499.90,
      quantity: 1,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=300"
    },
    {
      id: 3,
      name: "Memória RAM 32GB DDR4",
      price: 899.90,
      quantity: 2,
      image: "https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?w=300"
    }
  ])

  const updateQuantity = (id: number, action: 'increase' | 'decrease') => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1
          return { ...item, quantity: Math.max(1, newQuantity) }
        }
        return item
      })
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 299 ? 0 : 29.90
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-6">Adicione produtos para começar suas compras</p>
          <a
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Produtos
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho de Compras</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Itens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Itens no Carrinho ({cartItems.length})</h2>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-blue-600">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      {/* Controles de quantidade */}
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, 'decrease')}
                          className="p-2 hover:bg-gray-50"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 'increase')}
                          className="p-2 hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      {/* Subtotal do item */}
                      <div className="text-right min-w-[100px]">
                        <p className="font-bold text-gray-900">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                      
                      {/* Botão remover */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumo do Pedido */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2).replace('.', ',')}`}
                  </span>
                </div>
                
                {shipping > 0 && (
                  <p className="text-sm text-gray-600">
                    Frete grátis para compras acima de R$ 299,00
                  </p>
                )}
                
                <hr />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 mb-3">
                <CreditCard className="h-5 w-5" />
                <span>Finalizar Compra</span>
              </button>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Continuar Comprando
              </button>
            </div>
            
            {/* Informações de Entrega */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Truck className="h-5 w-5 mr-2 text-blue-600" />
                Informações de Entrega
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Entrega em todo o Brasil</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Frete grátis acima de R$ 299</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Entrega em 3-7 dias úteis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
