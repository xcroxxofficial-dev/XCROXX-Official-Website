import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { COMPANY } from '../constants/site'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center group/wa">
      <div className="absolute right-full mr-4 bg-white text-charcoal text-sm font-bold py-2 px-4 rounded-xl shadow-xl opacity-0 invisible group-hover/wa:opacity-100 group-hover/wa:visible transition-all duration-300 whitespace-nowrap origin-right scale-95 group-hover/wa:scale-100 pointer-events-none">
        Chat with us
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-[6px] border-transparent border-l-white" />
      </div>

      <motion.a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/30 hover:bg-[#1ebd5a] transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2.5s' }} />
        <FaWhatsapp size={36} className="relative z-10" />
      </motion.a>
    </div>
  )
}
