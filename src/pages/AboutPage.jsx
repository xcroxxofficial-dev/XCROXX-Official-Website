import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { FaGraduationCap, FaMedal, FaTrophy } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main className="pt-[104px] [&>section:first-child]:!pt-8 pb-20 min-h-screen bg-surface">
      {/* Company Intro */}
      <section className="section-pad bg-white">
        <div className="container-xc">
          <SectionHeading
            eyebrow="About XCroxx"
            title="Crafting the Future of Footwear"
            desc="At Universal Shoes Industries (XCroxx), we believe that every step matters. Founded on principles of quality, durability, and unmatched comfort, our mission is to deliver premium footwear that meets the diverse needs of modern consumers. Whether it's for performance, safety, or everyday style, our products are a testament to our dedication to excellence."
            align="center"
          />
        </div>
      </section>

      {/* CEO Section */}
      <section className="section-pad">
        <div className="container-xc">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square bg-gray-100 shadow-xl"
            >
              <img 
                src="/image/about/ceo.png" 
                alt="Chief Executive Officer" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-1">Founder Name</h3>
                <p className="text-red font-semibold text-lg">Chief Executive Officer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeading
                eyebrow="Our Leadership"
                title="A Vision for Global Excellence"
              />
              <div className="prose prose-lg text-charcoal/80">
                <p className="mb-4">
                  "Our journey began with a simple yet ambitious goal: to redefine the standards of footwear manufacturing. We wanted to create products that not only look good but empower the people who wear them."
                </p>
                <p className="mb-4">
                  With years of industry expertise, our CEO has steered XCroxx through immense growth, focusing on sustainable practices, technological advancements in manufacturing, and fostering a culture of innovation.
                </p>
                <p>
                  Today, XCroxx stands as a symbol of trust and quality, continually pushing boundaries to deliver the best to our customers worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-pad bg-white">
        <div className="container-xc">
          <SectionHeading
            eyebrow="The Founding Team"
            title="Meet Our Founders"
            desc="The visionary minds behind Universal Shoes Industries, dedicated to craftsmanship and innovation."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { id: 1, img: '/image/about/founder1.png', name: 'Founder One', role: 'Co-Founder & Director' },
              { id: 2, img: '/image/about/founder2.png', name: 'Founder Two', role: 'Co-Founder & Director' },
              { id: 3, img: '/image/about/founder3.png', name: 'Founder Three', role: 'Co-Founder & Director' },
            ].map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-6 shadow-lg">
                  <img 
                    src={founder.img} 
                    alt={founder.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-bold text-ink text-center">{founder.name}</h4>
                <p className="text-red font-medium text-center">{founder.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-pad">
        <div className="container-xc">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <SectionHeading
                eyebrow="Quality Assurance"
                title="Certified for Excellence"
                desc="Our commitment to quality is unwavering. We adhere to the highest international manufacturing standards to ensure every pair of shoes is flawless."
              />
              
              <ul className="space-y-6 mt-8">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red/10 flex items-center justify-center text-red shrink-0">
                    <FaMedal size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-ink text-lg">ISO 9001 Certified</h5>
                    <p className="text-charcoal/70 text-sm mt-1">Recognized for our rigorous quality management systems and consistent product excellence.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red/10 flex items-center justify-center text-red shrink-0">
                    <FaTrophy size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-ink text-lg">Industry Recognition</h5>
                    <p className="text-charcoal/70 text-sm mt-1">Awarded for innovation in safety footwear and sustainable manufacturing processes.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red/10 flex items-center justify-center text-red shrink-0">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-ink text-lg">Continuous Improvement</h5>
                    <p className="text-charcoal/70 text-sm mt-1">Dedicated to regular audits and upgrades to stay ahead in footwear technology.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 p-4 bg-white rounded-2xl shadow-xl border border-black/5"
            >
              <img 
                src="/image/about/certificate.png" 
                alt="Company Certificate" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
