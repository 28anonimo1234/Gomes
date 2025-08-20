
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Home from './pages/Home'

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
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
