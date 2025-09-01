
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Menu, X, ShoppingCart, User, Heart, Monitor, Cpu, HardDrive, Keyboard, Mouse, Headphones, Gamepad2, Smartphone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  const categories = [
    { name: 'Processadores', icon: Cpu, color: 'text-blue-600' },
    { name: 'Placas de Vídeo', icon: Monitor, color: 'text-green-600' },
    { name: 'Memórias RAM', icon: HardDrive, color: 'text-purple-600' },
    { name: 'Armazenamento', icon: HardDrive, color: 'text-orange-600' },
    { name: 'Teclados', icon: Keyboard, color: 'text-red-600' },
    { name: 'Mouses', icon: Mouse, color: 'text-indigo-600' },
    { name: 'Headsets', icon: Headphones, color: 'text-pink-600' },
    { name: 'Controles', icon: Gamepad2, color: 'text-yellow-600' },
    { name: 'Smartphones', icon: Smartphone, color: 'text-teal-600' }
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Barra superior */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span>Frete grátis para compras acima de R$ 299</span>
          <div className="hidden md:flex items-center space-x-4">
            <span>Suporte: (13) 99676-0180</span>
            <span>|</span>
            <span>Entrega em todo Brasil</span>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="https://static.lumi.new/62/62a12f58e22482aacb71c5a8ae5f51b2.webp"
                alt="Gomes Marketplace"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gomes</h1>
              <p className="text-xs text-gray-500">Marketplace</p>
            </div>
          </Link>

          {/* Barra de busca - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos, marcas ou categorias..."
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Buscar
              </button>
            </div>
          </div>

          {/* Ações do usuário */}
          <div className="flex items-center space-x-4">
            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/account" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="h-5 w-5" />
                <span className="text-sm">Conta</span>
              </Link>
              
              <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Favoritos</span>
              </button>
              
              <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm">Carrinho</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Barra de busca - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Menu de navegação */}
      <nav className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 py-3">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Menu className="h-4 w-4" />
              <span>Todas as Categorias</span>
            </button>
            
            <Link to="/daily-deals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Ofertas do Dia
            </Link>
            <Link to="/new-releases" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Lançamentos
            </Link>
            <Link to="/best-sellers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Mais Vendidos
            </Link>
            <Link to="/brands" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Marcas
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Suporte
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Ações do usuário - Mobile */}
              <div className="flex items-center justify-around py-4 border-b">
                <Link to="/account" className="flex flex-col items-center space-y-1 text-gray-700">
                  <User className="h-6 w-6" />
                  <span className="text-xs">Conta</span>
                </Link>
                <button className="flex flex-col items-center space-y-1 text-gray-700">
                  <Heart className="h-6 w-6" />
                  <span className="text-xs">Favoritos</span>
                </button>
                <Link to="/cart" className="flex flex-col items-center space-y-1 text-gray-700 relative">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="text-xs">Carrinho</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </div>

              {/* Menu links */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="block w-full text-left py-2 text-gray-700 font-medium"
                >
                  Todas as Categorias
                </button>
                <Link to="/daily-deals" className="block py-2 text-gray-700">
                  Ofertas do Dia
                </Link>
                <Link to="/new-releases" className="block py-2 text-gray-700">
                  Lançamentos
                </Link>
                <Link to="/best-sellers" className="block py-2 text-gray-700">
                  Mais Vendidos
                </Link>
                <Link to="/brands" className="block py-2 text-gray-700">
                  Marcas
                </Link>
                <Link to="/support" className="block py-2 text-gray-700">
                  Suporte
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown de Categorias */}
      <AnimatePresence>
        {isCategoriesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 bg-white shadow-xl border-t z-40"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <motion.Link
                    key={category.name}
                    to="/products"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <category.icon className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                      {category.name}
                    </span>
                  </motion.Link>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <Link to="/products" className="hover:text-blue-600 transition-colors">Ver todas as categorias</Link>
                  <span>•</span>
                  <Link to="/brands" className="hover:text-blue-600 transition-colors">Marcas populares</Link>
                  <span>•</span>
                  <Link to="/support" className="hover:text-blue-600 transition-colors">Guia de compras</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para fechar dropdown */}
      {isCategoriesOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={() => setIsCategoriesOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
