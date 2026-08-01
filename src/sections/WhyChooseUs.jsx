import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { FEATURES } from '../data/features'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-surface">
      <div className="container-xc">
        <SectionHeading
          eyebrow="Why Choose XCroxx"
          title="A manufacturing partner built for reliability"
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group p-7 rounded-2xl bg-white border border-black/5 hover:bg-ink transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-red/10 group-hover:bg-red/20 flex items-center justify-center text-red mb-5 transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="font-heading font-bold text-ink group-hover:text-white transition-colors">{f.title}</h4>
                <p className="text-sm text-charcoal/60 group-hover:text-white/60 mt-2 leading-relaxed transition-colors">
                  {f.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
