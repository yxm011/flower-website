import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Cart from './components/Cart'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <Cart />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App
