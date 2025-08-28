
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Account from './pages/Account'
import Contact from './pages/Contact'
import DailyDeals from './pages/DailyDeals'
import NewReleases from './pages/NewReleases'
import BestSellers from './pages/BestSellers'
import Brands from './pages/Brands'
import Support from './pages/Support'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { 
            background: '#1f2937', 
            color: '#fff',
            borderRadius: '8px'
          },
          success: { 
            style: { background: '#10b981' } 
          },
          error: { 
            style: { background: '#ef4444' } 
          }
        }}
      />
      
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/daily-deals" element={<DailyDeals />} />
            <Route path="/new-releases" element={<NewReleases />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
