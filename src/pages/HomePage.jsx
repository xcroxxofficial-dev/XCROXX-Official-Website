import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import WhyChooseUs from '../sections/WhyChooseUs'
import Partners from '../sections/Partners'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <main>
      <Hero />
      <About hideJourney={true} />
      <Products />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <FAQ />
    </main>
  )
}
