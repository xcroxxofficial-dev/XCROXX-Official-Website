import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { INFRASTRUCTURE } from '../data/infrastructure'

export default function Infrastructure() {
  return (
    <section id="factory" className="section-pad bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="container-xc relative z-10">
        <SectionHeading
          eyebrow="Inside XCroxx"
          title="Factory infrastructure built for scale"
          desc="A complete in-house facility, from raw material intake to finished, packaged product."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFRASTRUCTURE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 p-5 z-10">
                <h4 className="font-heading font-bold text-white text-base">{item.title}</h4>
                <p className="text-xs text-white/60 mt-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                  {item.desc}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-xs font-semibold backdrop-blur-sm">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
