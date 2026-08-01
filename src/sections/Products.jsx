import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { PRODUCTS } from '../data/products'

export default function Products() {
  const displayedProducts = PRODUCTS.slice(0, 14);

  return (
    <section id="products" className="section-pad bg-surface">
      <div className="container-xc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Our Range"
            title="Our Products"
            desc="From sports performance to industrial safety, every category is manufactured in-house to consistent quality standards."
          />
          <div className="hidden md:block">
            <Link to="/products" className="btn-primary shadow-[0_8px_20px_rgb(214,40,40,0.3)]">
              View All Products
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-card card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-ink">{p.name}</h3>
                <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-red text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                  Enquire Now <FaArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link to="/products" className="btn-primary w-full text-center justify-center shadow-[0_8px_20px_rgb(214,40,40,0.3)]">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
