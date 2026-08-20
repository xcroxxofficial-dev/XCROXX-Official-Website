import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Partners from '../sections/Partners'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'

export default function HomePage() {
  const location = useLocation()


  return (
    <main>
      <Hero />
      <About hideJourney={true} />
      <Products />
      <Partners />


    </main>
  )
}
