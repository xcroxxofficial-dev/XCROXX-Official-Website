import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { FAQS } from '../data/faq'

function Item({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-black/8">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-heading font-semibold text-ink text-base md:text-lg">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-9 h-9 rounded-full bg-surface flex items-center justify-center text-red"
        >
          <FaPlus size={13} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal/65 leading-relaxed pr-10">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section-pad bg-white">
      <div className="container-xc max-w-3xl">
        <SectionHeading eyebrow="Common Questions" title="Frequently asked questions" align="center" />
        <div>
          {FAQS.map((item, i) => (
            <Item key={item.q} item={item} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
