import { motion } from 'framer-motion'
import { FaStore, FaBoxes, FaIndustry, FaTag, FaBuilding, FaLandmark } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'

const CHANNELS = [
  { icon: FaStore, title: 'Dealer Network', desc: 'Regional dealers stocking the full XCroxx catalogue.' },
  { icon: FaBoxes, title: 'Wholesale', desc: 'Bulk pricing tiers for high-volume resellers.' },
  { icon: FaIndustry, title: 'OEM Manufacturing', desc: 'Production to your specifications and branding.' },
  { icon: FaTag, title: 'Private Label', desc: 'Custom packaging and labelling for your brand.' },
  { icon: FaBuilding, title: 'Corporate Orders', desc: 'Uniform and workwear footwear programs.' },
  { icon: FaLandmark, title: 'Government Supply', desc: 'Tender-ready supply for public institutions.' },
]

export default function Partners() {
  return (
    <section id="partners" className="section-pad bg-ink">
      <div className="container-xc">
        <SectionHeading
          eyebrow="Business Channels"
          title="Built to work with every kind of partner"
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 hover:border-red/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-red/15 flex items-center justify-center text-red">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">{c.title}</h4>
                  <p className="text-sm text-white/60 mt-1.5 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
