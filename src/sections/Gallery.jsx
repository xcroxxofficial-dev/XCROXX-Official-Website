import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { GALLERY } from '../data/gallery'

export default function Gallery() {
  const [active, setActive] = useState(null)

  const go = (dir) => {
    setActive((prev) => {
      const idx = GALLERY.findIndex((g) => g.id === prev.id)
      const next = (idx + dir + GALLERY.length) % GALLERY.length
      return GALLERY[next]
    })
  }

  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-xc">
        <SectionHeading
          eyebrow="Take a Look Inside"
          title="Factory gallery"
          desc="A visual look at our production floor, people and process."
        />

        <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {GALLERY.map((g, i) => (
            <motion.button
              key={g.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(g)}
              className={`relative w-full block break-inside-avoid rounded-2xl overflow-hidden group ${g.tall ? 'aspect-[3/4]' : 'aspect-square'}`}
            >
              <img src={g.image} alt={g.cat} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300 flex items-center justify-center">
                <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={22} />
              </div>
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wide uppercase bg-ink/60 px-3 py-1 rounded-full backdrop-blur-sm">
                {g.cat}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <button
              className="absolute left-4 md:left-10 text-white/70 hover:text-white text-3xl p-3"
              onClick={(e) => { e.stopPropagation(); go(-1) }}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <motion.img
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={active.image}
              alt={active.cat}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            />
            <button
              className="absolute right-4 md:right-10 text-white/70 hover:text-white text-3xl p-3"
              onClick={(e) => { e.stopPropagation(); go(1) }}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
