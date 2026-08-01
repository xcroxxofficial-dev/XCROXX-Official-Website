import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, desc, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-14 md:mb-16`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {desc && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-charcoal/70'}`}>
          {desc}
        </p>
      )}
    </motion.div>
  )
}
