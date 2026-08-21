import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'
import { STATS, CORE_VALUES, TIMELINE } from '../data/about'

export default function About({ hideJourney = false }) {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-xc">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Eight years of dedicated footwear manufacturing"
            />
            <p className="text-charcoal/70 leading-relaxed">
              Universal Shoes Industries, operating under the XCroxx brand, began as a
              single production line in Rupandehi and has grown into a full-scale footwear
              manufacturing facility. We produce sports, casual, school, industrial and
              kids' footwear for dealers, distributors, corporate buyers and government
              institutions across Nepal.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Our approach combines modern machinery with a skilled, experienced workforce
              to deliver consistent quality at production volumes our partners can rely on,
              order after order.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-surface border border-black/5">
                <h4 className="font-heading font-bold text-lg text-ink mb-2">Our Mission</h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  To manufacture reliable, comfortable footwear at scale, giving every
                  dealer and institution a partner they can depend on.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-black/5">
                <h4 className="font-heading font-bold text-lg text-ink mb-2">Our Vision</h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  To be Nepal's most trusted footwear manufacturer, recognized for quality,
                  consistency and dealer partnership.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-4 sm:p-7 rounded-2xl bg-ink text-white relative overflow-hidden flex flex-col justify-center"
                >
                  <div className="absolute -right-6 -top-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-red/20 blur-2xl" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-red relative z-10">
                    <AnimatedCounter value={stat.display ? 100 : stat.value} display={stat.display} />
                    {!stat.display && stat.suffix}
                  </p>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-white/60 relative z-10 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {CORE_VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 rounded-xl border border-black/8 hover:border-red/40 transition-colors"
                >
                  <h5 className="font-heading font-semibold text-ink">{v.title}</h5>
                  <p className="text-xs text-charcoal/60 mt-1.5 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        {!hideJourney && (
          <div className="mt-24">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-14">Our Journey</h3>
            <div className="relative">
              <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-black/10" />
              <div className="grid md:grid-cols-6 gap-8 md:gap-4">
                {TIMELINE.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="hidden md:flex w-3 h-3 rounded-full bg-red relative z-10 mb-4" />
                    <p className="text-red font-heading font-bold text-lg">{t.year}</p>
                    <p className="font-semibold text-ink mt-1">{t.title}</p>
                    <p className="text-xs text-charcoal/60 mt-2 leading-relaxed">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
