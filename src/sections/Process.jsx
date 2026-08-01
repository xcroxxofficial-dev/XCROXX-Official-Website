import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { PROCESS_STEPS } from '../data/process'

export default function Process() {
  return (
    <section id="process" className="section-pad bg-white">
      <div className="container-xc">
        <SectionHeading
          eyebrow="How We Build"
          title="Manufacturing process, step by step"
          desc="Every pair moves through eight controlled stages, from raw material to dispatch."
          align="center"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/10 md:-translate-x-1/2" />

          {PROCESS_STEPS.map((s, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start md:items-center gap-6 mb-10 md:mb-4 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-red border-4 border-white shadow -translate-x-1/2 z-10" />

                <div className={`flex-1 pl-16 md:pl-0 ${isLeft ? 'md:text-right md:pr-14' : 'md:pl-14'}`}>
                  <div className="inline-block p-6 rounded-2xl bg-surface border border-black/5 hover:border-red/30 hover:shadow-card transition-all duration-300">
                    <span className="text-red font-heading font-extrabold text-2xl">{s.step}</span>
                    <h4 className="font-heading font-bold text-ink mt-1">{s.title}</h4>
                    <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
