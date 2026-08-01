import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = TESTIMONIALS[index]

  const change = (dir) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="section-pad bg-surface">
      <div className="container-xc">
        <SectionHeading eyebrow="Client Voices" title="Trusted by dealers and institutions" align="center" />

        <div className="max-w-3xl mx-auto relative">
          <FaQuoteLeft className="text-red/15 text-6xl absolute -top-6 left-0" />
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-3xl p-10 md:p-12 shadow-card text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className={i < t.rating ? 'text-gold' : 'text-black/10'} />
                ))}
              </div>
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="text-left">
                  <p className="font-heading font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => change(-1)} className="w-11 h-11 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-red hover:text-white transition-colors">
              <FaChevronLeft size={14} />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-red' : 'w-2 bg-black/15'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => change(1)} className="w-11 h-11 rounded-full bg-white shadow-card flex items-center justify-center hover:bg-red hover:text-white transition-colors">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
