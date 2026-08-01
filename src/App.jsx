import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'
import FactoryPage from './pages/FactoryPage'
import ProcessPage from './pages/ProcessPage'
import WhyUsPage from './pages/WhyUsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/factory" element={<FactoryPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<CategoryPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
