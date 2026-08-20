import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Partners from '../sections/Partners'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import SEO from '../components/SEO'

export default function HomePage() {
  const location = useLocation()


  return (
    <main>
      <SEO 
        title="Universal Shoes Industries | Shoes & Footwear Manufacturer in Nepal"
        description="Universal Shoes Industries is a leading footwear and shoe manufacturing company based in Bhairahawa, Siddharthanagar, Nepal. We produce premium sports, school, and safety shoes."
        canonical="/"
      />
      <Hero />
      <About hideJourney={true} />
      <Products />
      <Partners />


    </main>
  )
}
